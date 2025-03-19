'use client'
import { motion, AnimatePresence } from 'framer-motion'

interface AutosaveNotificationProps {
  show: boolean
}

export default function AutosaveNotification({ show }: AutosaveNotificationProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg 
            shadow-lg flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M5 13l4 4L19 7" />
          </svg>
          <span>Draft saved</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 