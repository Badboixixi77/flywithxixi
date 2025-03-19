'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'success' | 'error'
  message: string
}

export default function Modal({ isOpen, onClose, type, message }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
              w-[90%] max-w-md bg-gradient-to-b from-[#1c2541] to-[#0a1128] 
              rounded-xl p-6 border border-[#ffd700]/30 shadow-xl"
          >
            <div className="text-center">
              {type === 'success' ? (
                <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-16 h-16 mx-auto text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              <h3 className="text-2xl font-bold mb-2 text-[#ffd700]">
                {type === 'success' ? 'Success!' : 'Error'}
              </h3>
              <p className="text-[#e2e8f0] mb-6">{message}</p>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-[#ffd700] to-[#ffed4a] text-[#0a1128] px-6 py-2 
                  rounded-lg font-bold tracking-wide transition-all duration-300 transform 
                  hover:scale-105 hover:shadow-lg hover:shadow-[#ffd700]/20 active:scale-[0.98]"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 