'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/80 to-[#1c2541]/70" />
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Private Jet"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight
              bg-gradient-to-r from-[#ffd700] to-[#ffed4a] bg-clip-text text-transparent"
          >
            Elevate Your Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-[#e2e8f0] font-light"
          >
            Experience the pinnacle of private aviation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link 
              href="/booking"
              className="bg-gradient-to-r from-[#ffd700] to-[#ffed4a] text-[#0a1128] px-8 py-4 
                rounded-lg text-lg font-bold tracking-wide transition-all duration-300 transform 
                hover:scale-105 hover:shadow-lg hover:shadow-[#ffd700]/20 active:scale-[0.98]"
            >
              Book Your Flight
            </Link>
            <Link 
              href="/fleet"
              className="bg-transparent text-[#ffd700] border-2 border-[#ffd700] px-8 py-4 
                rounded-lg text-lg font-bold tracking-wide transition-all duration-300 transform 
                hover:scale-105 hover:bg-[#ffd700]/10 active:scale-[0.98]"
            >
              Explore Fleet
            </Link>
          </motion.div>
        </div>
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1,
            repeat: Infinity,
            duration: 2,
            repeatType: "reverse"
          }}
        >
          <svg 
            className="w-6 h-6 text-[#ffd700]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a1128] to-[#1c2541]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffd700]">
              Why Choose FlyWithXiXi
            </h2>
            <p className="text-[#e2e8f0] text-lg max-w-3xl mx-auto">
              Experience unparalleled luxury and convenience in private aviation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0a1128]/50 backdrop-blur-sm rounded-xl p-8 border border-[#ffd700]/10
                  hover:border-[#ffd700]/30 transition-all duration-500 group"
              >
                <div className="text-[#ffd700] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#ffd700]">
                  {feature.title}
                </h3>
                <p className="text-[#e2e8f0]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0a1128]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffd700]">
              Client Experiences
            </h2>
            <p className="text-[#e2e8f0] text-lg max-w-3xl mx-auto">
              Hear from our valued clients about their journey with FlyWithXiXi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-b from-[#1c2541] to-[#0a1128] rounded-xl p-8
                  border border-[#ffd700]/10 hover:border-[#ffd700]/30 transition-all duration-500"
              >
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-[#ffd700] font-semibold">{testimonial.name}</h3>
                    <p className="text-[#e2e8f0]/80 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-[#e2e8f0] italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-[#1c2541] to-[#0a1128]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffd700]">
              Experience Luxury
            </h2>
            <p className="text-[#e2e8f0] text-lg max-w-3xl mx-auto">
              Take a glimpse into the world of private aviation excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square group overflow-hidden rounded-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-[#ffd700] font-semibold">{image.title}</h3>
                    <p className="text-white/90 text-sm">{image.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-[#0a1128]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffd700]">
              Latest Updates
            </h2>
            <p className="text-[#e2e8f0] text-lg max-w-3xl mx-auto">
              Stay informed with the latest news and developments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1c2541]/50 rounded-xl overflow-hidden group hover:shadow-xl 
                  transition-all duration-500 border border-[#ffd700]/10 hover:border-[#ffd700]/30"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[#ffd700]/80 text-sm mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold mb-3 text-[#ffd700]">{item.title}</h3>
                  <p className="text-[#e2e8f0] mb-4">{item.excerpt}</p>
                  <Link
                    href={item.link}
                    className="text-[#ffd700] hover:text-[#ffed4a] transition-colors duration-300 
                      inline-flex items-center group"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2 transform transition-transform duration-300 
                        group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Showcase */}
      <section className="py-20 bg-[#0a1128]">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ffd700]">
              Popular Destinations
            </h2>
            <p className="text-[#e2e8f0] text-lg max-w-3xl mx-auto">
              Explore some of our most requested destinations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-[400px] group rounded-xl overflow-hidden"
              >
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-[#ffd700] mb-2">{destination.title}</h3>
                  <p className="text-white/90 mb-4">{destination.description}</p>
                  <Link
                    href={`/destinations/${destination.id}`}
                    className="inline-flex items-center text-[#ffd700] hover:text-[#ffed4a] 
                      transition-colors duration-300 group/link"
                  >
                    Explore
                    <svg
                      className="w-4 h-4 ml-2 transform transition-transform duration-300 
                        group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
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
              Ready to Experience Luxury?
            </h2>
            <p className="text-[#e2e8f0] text-lg md:text-xl mb-10">
              Contact us today to begin your journey.
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
                href="/fleet"
                className="bg-transparent text-[#ffd700] border-2 border-[#ffd700] px-10 py-4 
                  rounded-lg font-bold tracking-wide transition-all duration-300 transform 
                  hover:scale-105 hover:bg-[#ffd700]/10 active:scale-[0.98]"
              >
                View Fleet
              </Link>
            </div>
          </motion.div>
      </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "Global Access",
    description: "Fly to any destination worldwide with our extensive network of private airports and facilities.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "24/7 Concierge",
    description: "Dedicated support team available around the clock to cater to your every need.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Luxury Fleet",
    description: "Access to the world's most prestigious and advanced private aircraft.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l14 9-14 9V3z" />
      </svg>
    )
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, Tech Innovations",
    quote: "FlyWithXiXi has transformed our corporate travel experience. The attention to detail and service quality is unmatched.",
    image: "/images/testimonials/sarah.jpg"
  },
  {
    name: "Michael Chen",
    title: "International Entrepreneur",
    quote: "Their global reach and 24/7 concierge service make every journey seamless and luxurious.",
    image: "/images/testimonials/michael.jpg"
  },
  {
    name: "Emma Williams",
    title: "Luxury Travel Consultant",
    quote: "The fleet selection and customization options exceed my clients' highest expectations.",
    image: "/images/testimonials/emma.jpg"
  }
]

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/cabin-interior.jpg",
    alt: "Luxury Cabin Interior",
    title: "Premium Cabin",
    description: "Experience ultimate comfort in our luxurious cabins"
  },
  {
    id: 2,
    src: "/images/gallery/jet-exterior.jpg",
    alt: "Private Jet Exterior",
    title: "Modern Fleet",
    description: "State-of-the-art aircraft for your journey"
  },
  {
    id: 3,
    src: "/images/gallery/dining.jpg",
    alt: "In-flight Dining",
    title: "Gourmet Dining",
    description: "Exquisite cuisine at 40,000 feet"
  },
  {
    id: 4,
    src: "/images/gallery/lounge.jpg",
    alt: "Private Lounge",
    title: "VIP Lounges",
    description: "Exclusive airport lounges worldwide"
  },
  {
    id: 5,
    src: "/images/gallery/cockpit.jpg",
    alt: "Modern Cockpit",
    title: "Advanced Technology",
    description: "State-of-the-art avionics and safety features"
  },
  {
    id: 6,
    src: "/images/gallery/bedroom.jpg",
    alt: "Private Bedroom",
    title: "Private Suites",
    description: "Rest comfortably during long-haul flights"
  },
  {
    id: 7,
    src: "/images/gallery/service.jpg",
    alt: "Cabin Service",
    title: "Premium Service",
    description: "Dedicated cabin crew at your service"
  },
  {
    id: 8,
    src: "/images/gallery/destination.jpg",
    alt: "Exotic Destination",
    title: "Global Access",
    description: "Reach any destination in style"
  }
]

const newsItems = [
  {
    id: 1,
    title: "New Global Partnership Announced",
    excerpt: "Expanding our reach with strategic partnerships across Asia and Europe.",
    date: "March 15, 2024",
    image: "/images/news/partnership.jpg",
    link: "/news/global-partnership"
  },
  {
    id: 2,
    title: "Introducing Our Latest Fleet Addition",
    excerpt: "Welcome the new Gulfstream G700 to our premium fleet.",
    date: "March 10, 2024",
    image: "/images/news/new-aircraft.jpg",
    link: "/news/new-fleet"
  },
  {
    id: 3,
    title: "Sustainable Aviation Initiative",
    excerpt: "Leading the industry with our commitment to carbon-neutral flights.",
    date: "March 5, 2024",
    image: "/images/news/sustainable.jpg",
    link: "/news/sustainable-aviation"
  }
]

const destinations = [
  {
    id: 'dubai',
    title: 'Dubai',
    description: 'Experience luxury in the heart of the UAE',
    image: '/images/destinations/dubai.jpg'
  },
  {
    id: 'maldives',
    title: 'Maldives',
    description: 'Paradise found in the Indian Ocean',
    image: '/images/destinations/maldives.jpg'
  },
  {
    id: 'monaco',
    title: 'Monaco',
    description: 'The epitome of European elegance',
    image: '/images/destinations/monaco.jpg'
  },
  {
    id: 'bali',
    title: 'Bali',
    description: 'Tropical luxury meets cultural heritage',
    image: '/images/destinations/bali.jpg'
  }
]