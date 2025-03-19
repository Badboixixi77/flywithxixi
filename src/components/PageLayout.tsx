'use client'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-16"
      >
        {children}
      </motion.main>
    </div>
  )
} 