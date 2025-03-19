'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import Modal from '@/components/Modal'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useRouter } from 'next/navigation'
import { sendAnalytics } from '@/components/FormAnalytics'
import ReCAPTCHA from 'react-google-recaptcha'
import { useFormPersist } from '@/hooks/useFormPersist'
import { useFormValidation } from '@/hooks/useFormValidation'
import { sendEmail } from '@/services/emailService'
import { emailScheduler } from '@/services/emailScheduler'
import LoadingSpinner from '@/components/LoadingSpinner'

// Fix Leaflet marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/marker-icon-2x.png',
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png',
})

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [modalOpen, setModalOpen] = useState(false)
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
  const router = useRouter()

  const [formData, setFormData, clearFormData] = useFormPersist<FormData>('contact-form', {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const { errors, validate, setErrors } = useFormValidation({
    name: {
      required: true,
      minLength: 2,
      message: 'Please enter your name (minimum 2 characters)'
    },
    email: {
      required: true,
      pattern: /\S+@\S+\.\S+/,
      message: 'Please enter a valid email address'
    },
    phone: {
      pattern: /^\+?[\d\s-()]+$/,
      message: 'Please enter a valid phone number'
    },
    subject: {
      required: true,
      message: 'Please select a subject'
    },
    message: {
      required: true,
      minLength: 10,
      message: 'Please enter your message (minimum 10 characters)'
    }
  })

  const [attachments, setAttachments] = useState<File[]>([])
  const [scheduledTime, setScheduledTime] = useState<string>('')

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, '')
    
    // Format the number
    if (numbers.length <= 3) {
      return numbers
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6)}`
    } else {
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    if (name === 'phone') {
      setFormData(prev => ({ 
        ...prev, 
        [name]: formatPhoneNumber(value)
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!validate(formData)) {
      return
    }

    if (!recaptchaValue) {
      setErrors(prev => ({ ...prev, recaptcha: 'Please complete the reCAPTCHA' }))
      return
    }

    setFormStatus('sending')
    
    try {
      if (scheduledTime) {
        // Schedule the email
        const scheduledId = emailScheduler.scheduleEmail(
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            attachments
          },
          scheduledTime
        )
        
        setFormStatus('success')
        clearFormData()
        router.push('/contact/success?scheduled=true')
      } else {
        // Send immediately
        const emailResponse = await sendEmail({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          attachments
        })

        if (!emailResponse.success) {
          throw new Error('Failed to send email')
        }

        await sendAnalytics({
          formId: 'contact',
          event: 'form_submit',
          emailId: emailResponse.emailId
        })
        
        setFormStatus('success')
        clearFormData()
        router.push('/contact/success')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus('error')
      setModalOpen(true)
      
      await sendAnalytics({
        formId: 'contact',
        event: 'form_error',
        errorType: 'submission_failed'
      })
    }
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-[#0a1128] to-[#1c2541]">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/80 to-[#1c2541]/70 z-10" />
          <div className="absolute inset-0">
            <Image
              src="/images/contact-hero.jpg"
              alt="Contact Us"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent 
                bg-gradient-to-r from-[#ffd700] to-[#ffed4a]"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-[#e2e8f0]"
            >
              Let us help you plan your perfect journey
            </motion.p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-b from-[#1c2541] to-[#0a1128] rounded-xl p-8
                  border border-[#ffd700]/10 hover:border-[#ffd700]/30 transition-all duration-500"
              >
                <h2 className="text-2xl font-bold mb-6 text-[#ffd700]">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[#e2e8f0] mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0a1128] border border-[#ffd700]/20 
                        text-[#e2e8f0] focus:outline-none focus:border-[#ffd700] transition-colors"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[#e2e8f0] mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0a1128] border border-[#ffd700]/20 
                        text-[#e2e8f0] focus:outline-none focus:border-[#ffd700] transition-colors"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[#e2e8f0] mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0a1128] border border-[#ffd700]/20 
                        text-[#e2e8f0] focus:outline-none focus:border-[#ffd700] transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[#e2e8f0] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#0a1128] border border-[#ffd700]/20 
                        text-[#e2e8f0] focus:outline-none focus:border-[#ffd700] transition-colors"
                      rows={4}
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                      onChange={(value) => {
                        setRecaptchaValue(value)
                        if (value) {
                          setErrors(prev => ({ ...prev, recaptcha: '' }))
                        }
                      }}
                      theme="dark"
                    />
                    {errors.recaptcha && (
                      <p className="text-red-500 text-sm mt-1">{errors.recaptcha}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-gradient-to-r from-[#ffd700] to-[#ffed4a] text-[#0a1128] 
                      py-4 rounded-lg font-bold tracking-wide transition-all duration-300 transform 
                      hover:scale-[1.02] hover:shadow-lg hover:shadow-[#ffd700]/20 
                      active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-b from-[#1c2541] to-[#0a1128] rounded-xl p-8
                  border border-[#ffd700]/10 hover:border-[#ffd700]/30 transition-all duration-500"
              >
                <h2 className="text-2xl font-bold mb-6 text-[#ffd700]">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Main Office
                    </h3>
                    <p className="text-gray-600">123 Aviation Way</p>
                    <p className="text-gray-600">Los Angeles, CA 90045</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Phone
                    </h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </h3>
                    <p className="text-gray-600">info@privateair.com</p>
                    <p className="text-gray-600">charter@privateair.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Hours
                    </h3>
                    <p className="text-gray-600">24/7 Availability</p>
                    <p className="text-gray-600">Emergency Support Available</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Add Map Section */}
        <section className="py-20 bg-[#0a1128]">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden h-[400px]"
            >
              <MapContainer
                center={[34.0522, -118.2437]}
                zoom={13}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[34.0522, -118.2437]}>
                  <Popup>
                    FlyWithXiXi Headquarters <br />
                    123 Aviation Way, Los Angeles
                  </Popup>
                </Marker>
              </MapContainer>
            </motion.div>
          </div>
        </section>

        {/* Modal */}
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          type={formStatus === 'success' ? 'success' : 'error'}
          message={
            formStatus === 'success'
              ? 'Your message has been sent successfully. We will get back to you soon!'
              : 'There was an error sending your message. Please try again.'
          }
        />
      </div>
    </PageLayout>
  )
} 