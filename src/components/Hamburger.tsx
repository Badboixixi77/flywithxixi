'use client'
import { motion } from 'framer-motion'

interface HamburgerProps {
  isOpen: boolean
  onClick: () => void
}

export default function Hamburger({ isOpen, onClick }: HamburgerProps) {
  const transition = { duration: 0.3 }

  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 }
  }

  const centerLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  }

  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 }
  }

  return (
    <button
      onClick={onClick}
      className="p-2 rounded-md hover:bg-[#ffd700]/10 focus:outline-none 
        focus:ring-2 focus:ring-[#ffd700]/50 transition-colors duration-300"
      aria-label="Menu"
    >
      <div className="relative w-6 h-5">
        <motion.span
          animate={isOpen ? 'open' : 'closed'}
          variants={topLineVariants}
          transition={transition}
          className="absolute top-0 left-0 w-full h-0.5 bg-[#ffd700] transform-origin-center rounded-full"
        />
        <motion.span
          animate={isOpen ? 'open' : 'closed'}
          variants={centerLineVariants}
          transition={transition}
          className="absolute top-[10px] left-0 w-full h-0.5 bg-[#ffd700] rounded-full"
        />
        <motion.span
          animate={isOpen ? 'open' : 'closed'}
          variants={bottomLineVariants}
          transition={transition}
          className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ffd700] transform-origin-center rounded-full"
        />
      </div>
    </button>
  )
} 