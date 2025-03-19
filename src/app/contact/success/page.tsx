'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'

export default function ContactSuccess() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-[#0a1128] to-[#1c2541] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg w-full bg-gradient-to-b from-[#1c2541] to-[#0a1128] rounded-xl p-8
            border border-[#ffd700]/10 text-center"
        >
          <div className="mb-6">
            <svg 
              className="w-16 h-16 mx-auto text-[#ffd700]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-[#ffd700]">Message Sent!</h1>
          <p className="text-[#e2e8f0] mb-8">
            Thank you for contacting us. We'll get back to you as soon as possible.
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-[#ffd700] to-[#ffed4a] text-[#0a1128] 
              px-8 py-3 rounded-lg font-bold tracking-wide transition-all duration-300 transform 
              hover:scale-105 hover:shadow-lg hover:shadow-[#ffd700]/20 active:scale-[0.98]"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </PageLayout>
  )
} 