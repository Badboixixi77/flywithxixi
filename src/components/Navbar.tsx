'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Hamburger from './Hamburger'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '/services', label: 'Services' },
    { href: '/fleet', label: 'Fleet' },
    { href: '/charter', label: 'Charter' },
    { href: '/contact', label: 'Contact' },
    {
      label: 'Email Analytics',
      href: '/admin/email-analytics',
      adminOnly: true
    }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${scrolled 
        ? 'bg-[#0a1128]/95 backdrop-blur-md shadow-lg shadow-black/10' 
        : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl md:text-3xl font-extrabold tracking-tight transition-colors duration-300
                bg-gradient-to-r from-[#ffd700] to-[#ffed4a] bg-clip-text text-transparent
                hover:from-[#ffed4a] hover:to-[#ffd700]"
            >
              FlyWith<span className="text-white">XiXi</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#e2e8f0] hover:text-[#ffd700] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#ffd700] transform scale-x-0 
                  group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <Hamburger isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 right-0 bg-[#0a1128]/95 backdrop-blur-md border-t border-[#ffd700]/10 md:hidden"
          >
            <div className="px-4 py-2">
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  className="border-b border-[#ffd700]/10 last:border-b-0"
                >
                  <Link
                    href={item.href}
                    className="block py-4 text-[#e2e8f0] hover:text-[#ffd700] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
} 