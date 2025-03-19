'use client'
import { useEffect, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { motion } from 'framer-motion'

interface CustomReCAPTCHAProps {
  onChange: (token: string | null) => void
  error?: string
}

export default function CustomReCAPTCHA({ onChange, error }: CustomReCAPTCHAProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  useEffect(() => {
    // Reset reCAPTCHA on error
    if (error) {
      recaptchaRef.current?.reset()
    }
  }, [error])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <div className="flex justify-center">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
          onChange={onChange}
          theme="dark"
          size="normal"
          className="recaptcha-container"
        />
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 text-sm mt-2 text-center"
        >
          {error}
        </motion.p>
      )}
      <style jsx global>{`
        .recaptcha-container {
          transform-origin: center;
          transition: transform 0.3s ease;
        }
        .recaptcha-container:hover {
          transform: scale(1.02);
        }
        .recaptcha-container iframe {
          border-radius: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </motion.div>
  )
} 