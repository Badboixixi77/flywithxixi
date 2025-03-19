'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'

interface Service {
  title: string
  description: string
  features: string[]
  image: string
  link: string
}

const services: Service[] = [
  {
    title: "Private Charter",
    description: "Experience ultimate flexibility and luxury with our private charter services. Travel on your schedule to any destination worldwide.",
    features: [
      "24/7 availability",
      "Custom flight planning",
      "Luxury ground transportation",
      "Personalized catering",
      "Access to exclusive terminals"
    ],
    image: "/images/private-charter.jpg",
    link: "/charter"
  },
  {
    title: "Aircraft Management",
    description: "Comprehensive aircraft management solutions for private jet owners, optimizing operations and reducing costs.",
    features: [
      "Crew recruitment and training",
      "Maintenance scheduling",
      "Revenue optimization",
      "Regulatory compliance",
      "Financial reporting"
    ],
    image: "/images/aircraft-management.jpg",
    link: "/contact"
  },
  {
    title: "Concierge Services",
    description: "End-to-end luxury travel arrangements ensuring a seamless and comfortable journey.",
    features: [
      "Hotel reservations",
      "Restaurant bookings",
      "Event access",
      "Security services",
      "Personal assistance"
    ],
    image: "/images/concierge.jpg",
    link: "/contact"
  },
  {
    title: "Corporate Solutions",
    description: "Tailored aviation programs for businesses, enhancing productivity and flexibility.",
    features: [
      "Corporate membership programs",
      "Group charter services",
      "Meeting facilities",
      "Priority booking",
      "Customized billing"
    ],
    image: "/images/corporate.jpg",
    link: "/contact"
  },
  {
    title: "Medical Transport",
    description: "Specialized medical transportation with state-of-the-art equipment and experienced medical staff.",
    features: [
      "24/7 medical support",
      "Advanced medical equipment",
      "Qualified medical personnel",
      "Global coverage",
      "Rapid response"
    ],
    image: "/images/medical.jpg",
    link: "/contact"
  },
  {
    title: "Luxury Experiences",
    description: "Curated luxury travel experiences combining private aviation with exclusive destinations and events.",
    features: [
      "VIP event access",
      "Luxury accommodations",
      "Private tours",
      "Exclusive experiences",
      "Personal concierge"
    ],
    image: "/images/luxury.jpg",
    link: "/contact"
  }
]

export default function Services() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-[#0a1128] to-[#1c2541]">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/80 to-[#1c2541]/70 z-10" />
          <div className="absolute inset-0">
            <Image
              src="/images/services-hero.jpg"
              alt="Private Jet Services"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ffd700] to-[#ffed4a]"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-[#e2e8f0]"
            >
              Experience unparalleled luxury in private aviation
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-b from-[#1c2541] to-[#0a1128] rounded-xl overflow-hidden group 
                    border border-[#ffd700]/10 hover:border-[#ffd700]/30 transition-all duration-500
                    shadow-lg hover:shadow-2xl hover:shadow-[#ffd700]/10"
                >
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent 
                      opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-[#ffd700]">{service.title}</h3>
                    <p className="text-[#e2e8f0] mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-[#e2e8f0]/80 group/item">
                          <motion.svg 
                            className="w-5 h-5 text-[#ffd700] mr-3 transition-transform duration-300 group-hover/item:scale-110" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </motion.svg>
                          <span className="group-hover/item:text-[#ffd700] transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.link}
                      className="inline-block w-full text-center bg-gradient-to-r from-[#ffd700] to-[#ffed4a] 
                        text-[#0a1128] py-4 rounded-lg font-bold tracking-wide
                        transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg 
                        hover:shadow-[#ffd700]/20 active:scale-[0.98]"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffd700] to-[#ffed4a] opacity-10" />
          <div className="container mx-auto px-4 text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#ffd700] mb-6 drop-shadow-lg">
                Ready to Experience Our Premium Services?
              </h2>
              <p className="text-[#e2e8f0] text-lg md:text-xl mb-10">
                Contact us today to discuss how we can meet your aviation needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-[#ffd700] to-[#ffed4a] text-[#0a1128] px-10 py-4 
                    rounded-lg font-bold tracking-wide transition-all duration-300 transform 
                    hover:scale-105 hover:shadow-lg hover:shadow-[#ffd700]/20 active:scale-[0.98]"
                >
                  Contact Us
                </Link>
                <Link
                  href="/booking"
                  className="bg-transparent text-[#ffd700] border-2 border-[#ffd700] px-10 py-4 
                    rounded-lg font-bold tracking-wide transition-all duration-300 transform 
                    hover:scale-105 hover:bg-[#ffd700]/10 active:scale-[0.98]"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
} 