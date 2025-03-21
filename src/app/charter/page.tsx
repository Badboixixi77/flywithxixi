'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import PageLayout from '@/components/PageLayout'

interface CharterOption {
  title: string
  description: string
  features: string[]
  priceRange: string
  image: string
}

const charterOptions: CharterOption[] = [
  {
    title: "Executive Charter",
    description: "Perfect for business trips and corporate events",
    features: [
      "Flexible scheduling",
      "High-speed Wi-Fi",
      "Conference call facilities",
      "Catering services",
      "Ground transportation"
    ],
    priceRange: "Starting from $5,000/hour",
    image: "/images/executive-jet.jpg"
  },
  {
    title: "Luxury Leisure",
    description: "Ultimate comfort for vacation and leisure travel",
    features: [
      "Premium cabin service",
      "Gourmet dining options",
      "Entertainment systems",
      "Luxury amenities",
      "Concierge service"
    ],
    priceRange: "Starting from $6,500/hour",
    image: "/images/luxury-jet.jpg"
  },
  {
    title: "Group Charter",
    description: "Ideal for large groups and special events",
    features: [
      "Spacious cabin configuration",
      "Custom catering options",
      "Event planning assistance",
      "Multiple destination capability",
      "Dedicated crew"
    ],
    priceRange: "Starting from $8,000/hour",
    image: "/images/group-jet.jpg"
  }
]

export default function Charter() {
  const [activeOption, setActiveOption] = useState<string | null>(null)

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-[#0a1128] to-[#1c2541]">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/80 to-[#1c2541]/70 z-10" />
          <div className="absolute inset-0">
            <Image
              src="/images/charter-hero.jpg"
              alt="Private Jet Charter"
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
              Charter Your Journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-[#e2e8f0]"
            >
              Seamless private aviation tailored to your needs
            </motion.p>
          </div>
        </section>

        {/* Charter Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {charterOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-b from-[#1c2541] to-[#0a1128] rounded-xl p-8
                    border border-[#ffd700]/10 hover:border-[#ffd700]/30 transition-all duration-500
                    group hover:shadow-xl hover:shadow-[#ffd700]/5"
                >
                  <div className="text-[#ffd700] mb-6 group-hover:scale-110 transition-transform duration-300">
                    {option.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#ffd700]">{option.title}</h3>
                  <p className="text-[#e2e8f0] mb-6">{option.description}</p>
                  <motion.ul 
                    className={`space-y-2 mb-6 overflow-hidden`}
                    initial={false}
                    animate={{ 
                      height: activeOption === option.title ? 'auto' : '0',
                      opacity: activeOption === option.title ? 1 : 0
                    }}
                  >
                    {option.features.map(feature => (
                      <li key={feature} className="flex items-center text-gray-600 text-sm sm:text-base">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </motion.ul>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t gap-4 sm:gap-0">
                    <span className="text-gray-900 font-semibold text-sm sm:text-base">{option.priceRange}</span>
                    <Link
                      href="/booking"
                      className="w-full sm:w-auto text-center sm:text-left bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                    >
                      Book Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Improved mobile layout */}
        <section className="py-12 md:py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">Why Choose Our Charter Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">24/7 Availability</h3>
                <p className="text-gray-400">Ready to serve you anytime, anywhere with our round-the-clock service.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Safety First</h3>
                <p className="text-gray-400">Highest safety standards with experienced crew and maintained aircraft.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Premium Service</h3>
                <p className="text-gray-400">Luxurious experience with personalized attention to every detail.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section - Mobile optimized */}
        <section className="py-12 md:py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Ready to Experience Private Aviation?</h2>
              <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 px-4">
                Contact us now to discuss your charter requirements and receive a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                <Link
                  href="/booking"
                  className="w-full sm:w-auto bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
                >
                  Book Charter
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all transform hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
} 