import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import EmailJSProvider from '@/components/EmailJSProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlyWithXiXi',
  description: 'Luxury Private Aviation Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-[#0a1128]`}>
        <EmailJSProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
        </EmailJSProvider>
      </body>
    </html>
  )
}