'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'

interface Aircraft {
  id: string
  name: string
  category: string
  passengers: string
  range: string
  speed: string
  features: string[]
  description: string
  image: string
}

const aircraft: Aircraft[] = [
  {
    id: 'global7500',
    name: 'Global 7500',
    category: 'Ultra Long Range',
    passengers: '19 passengers',
    range: '7,700 nm',
    speed: 'Mach 0.925',
    features: [
      'Four living spaces',
      'Master suite with shower',
      'Full-size kitchen',
      'High-speed internet',
      'Advanced air purification'
    ],
    description: "The Global 7500 is the world's largest and longest-range business jet, offering unmatched luxury and performance.",
    image: '/images/global7500.jpg'
  },
  {
    id: 'g650',
    name: 'Gulfstream G650',
    category: 'Ultra Long Range',
    passengers: '16 passengers',
    range: '7,000 nm',
    speed: 'Mach 0.925',
    features: [
      'Panoramic windows',
      'Low cabin altitude',
      'Fresh air system',
      'Satellite communications',
      'Private stateroom'
    ],
    description: "The G650 combines speed, range, and sophisticated luxury to deliver an exceptional private jet experience.",
    image: '/images/g650.jpg'
  },
  {
    id: 'challenger350',
    name: 'Challenger 350',
    category: 'Super Midsize',
    passengers: '10 passengers',
    range: '3,200 nm',
    speed: 'Mach 0.83',
    features: [
      'Flat floor cabin',
      'WiFi connectivity',
      'Entertainment system',
      'Quiet cabin',
      'Baggage access'
    ],
    description: "The Challenger 350 offers the perfect balance of comfort, performance, and efficiency.",
    image: '/images/challenger350.jpg'
  },
  {
    id: 'phenom300',
    name: 'Phenom 300E',
    category: 'Light Jet',
    passengers: '8 passengers',
    range: '2,010 nm',
    speed: 'Mach 0.80',
    features: [
      'Best-in-class range',
      'Largest baggage capacity',
      'Advanced avionics',
      'Premium interior',
      'Single-pilot certified'
    ],
    description: "The Phenom 300E is the most delivered light jet for multiple consecutive years, offering exceptional value.",
    image: '/images/phenom300.jpg'
  },
  {
    id: 'citation-x',
    name: 'Citation X+',
    category: 'Super Midsize',
    passengers: '12 passengers',
    range: '3,460 nm',
    speed: 'Mach 0.935',
    features: [
      'Fastest civilian aircraft',
      'Stand-up cabin',
      'Executive seating',
      'Satellite phone',
      'Entertainment system'
    ],
    description: "The Citation X+ is the fastest civilian aircraft in the world, perfect for time-sensitive travel.",
    image: '/images/citation-x.jpg'
  },
  {
    id: 'legacy500',
    name: 'Legacy 500',
    category: 'Midsize',
    passengers: '12 passengers',
    range: '3,125 nm',
    speed: 'Mach 0.83',
    features: [
      'Full stand-up cabin',
      'Digital flight controls',
      'Low cabin altitude',
      'Gourmet galley',
      'Vacuum lavatory'
    ],
    description: "The Legacy 500 offers midsize comfort with large-jet technology and performance.",
    image: '/images/legacy500.jpg'
  }
]

export default function Fleet() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0">
            <Image
              src="/images/fleet-hero.jpg"
              alt="Private Jet Fleet"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-400"
            >
              Our Fleet
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200"
            >
              Discover our diverse range of luxury aircraft
            </motion.p>
          </div>
        </section>

        {/* Fleet Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aircraft.map((plane, index) => (
                <motion.div
                  key={plane.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl shadow-lg overflow-hidden group border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
                >
                  <div className="h-56 relative overflow-hidden">
                    <Image
                      src={plane.image}
                      alt={plane.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-amber-300">{plane.name}</h3>
                        <p className="text-amber-500/80">{plane.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400">{plane.passengers}</p>
                        <p className="text-gray-400">{plane.range}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6">{plane.description}</p>
                    <div className="space-y-3 mb-6">
                      {plane.features.map((feature) => (
                        <div key={feature} className="flex items-center text-gray-300">
                          <svg className="w-5 h-5 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/booking"
                      className="inline-block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-amber-500/25"
                    >
                      Charter Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-amber-500 to-amber-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                Ready to Experience Our Premium Fleet?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Contact us today to book your preferred aircraft.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/booking"
                  className="bg-slate-900 text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all transform hover:scale-105 shadow-xl"
                >
                  Book Now
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent text-slate-900 border-2 border-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-900/10 transition-all transform hover:scale-105"
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