'use client'
import { motion, AnimatePresence } from 'framer-motion'
import LoadingSpinner from './LoadingSpinner'

interface LoadingOverlayProps {
  isLoading: boolean
  message?: string
}

export default function LoadingOverlay({ isLoading, message = 'Sending...' }: LoadingOverlayProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 
            flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#1c2541] p-8 rounded-xl shadow-xl 
              border border-[#ffd700]/20 text-center"
          >
            <LoadingSpinner />
            <p className="text-[#e2e8f0] mt-4">{message}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 