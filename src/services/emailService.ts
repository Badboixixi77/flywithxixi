'use client'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '@/config/emailjs'
import { getEmailTemplate } from './emailTemplates'

interface EmailData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface EmailTrackingData {
  emailId: string
  status: 'sent' | 'delivered' | 'opened' | 'clicked'
  timestamp: string
}

export const sendEmail = async (data: EmailData) => {
  try {
    // Generate a unique email ID
    const emailId = `email_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    // Get the appropriate template based on subject
    const templateName = data.subject.toLowerCase().includes('charter') ? 'charter' :
                        data.subject.toLowerCase().includes('booking') ? 'booking' :
                        'contact'

    // Get the HTML template
    const htmlContent = getEmailTemplate(templateName, {
      from_name: data.name,
      from_email: data.email,
      phone_number: data.phone,
      subject: data.subject,
      message: data.message,
      email_id: emailId
    })

    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      {
        from_name: data.name,
        from_email: data.email,
        phone_number: data.phone,
        subject: data.subject,
        message: data.message,
        email_id: emailId,
        html_content: htmlContent
      },
      emailjsConfig.publicKey
    )

    if (response.status === 200) {
      // Track email sent
      await trackEmail({
        emailId,
        status: 'sent',
        timestamp: new Date().toISOString()
      })
      return { success: true, emailId }
    } else {
      throw new Error('Failed to send email')
    }
  } catch (error) {
    console.error('Email service error:', error)
    throw error
  }
}

export const trackEmail = async (trackingData: EmailTrackingData) => {
  try {
    // You would typically send this to your analytics endpoint
    console.log('Email Tracking:', trackingData)

    // Store in localStorage for demo purposes
    const trackingHistory = JSON.parse(localStorage.getItem('emailTracking') || '[]')
    trackingHistory.push(trackingData)
    localStorage.setItem('emailTracking', JSON.stringify(trackingHistory))

    return { success: true }
  } catch (error) {
    console.error('Tracking error:', error)
    return { success: false }
  }
} 