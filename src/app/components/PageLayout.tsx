'use client'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

export default function PageLayout({
  children,
  className = ""
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`pt-16 ${className}`}
      >
        {children}
      </motion.main>
    </>
  )
} 