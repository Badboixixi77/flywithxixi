'use client'
import { useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '@/config/emailjs'

export default function EmailJSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    emailjs.init(emailjsConfig.publicKey)
  }, [])

  return <>{children}</>
} 