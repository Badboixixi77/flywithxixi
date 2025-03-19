'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PageLayout from '@/components/PageLayout'

interface EmailTracking {
  emailId: string
  status: 'sent' | 'delivered' | 'opened' | 'clicked'
  timestamp: string
}

export default function EmailAnalytics() {
  const [trackingData, setTrackingData] = useState<EmailTracking[]>([])

  useEffect(() => {
    // Load tracking data from localStorage
    const data = JSON.parse(localStorage.getItem('emailTracking') || '[]')
    setTrackingData(data)
  }, [])

  const getStatusCount = (status: EmailTracking['status']) => {
    return trackingData.filter(item => item.status === status).length
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-[#0a1128] to-[#1c2541] py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8 text-[#ffd700]">Email Analytics</h1>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {['sent', 'delivered', 'opened', 'clicked'].map((status) => (
                <div
                  key={status}
                  className="bg-[#1c2541] rounded-xl p-6 border border-[#ffd700]/10"
                >
                  <h3 className="text-[#ffd700] text-lg mb-2 capitalize">{status}</h3>
                  <p className="text-4xl font-bold text-[#e2e8f0]">
                    {getStatusCount(status as EmailTracking['status'])}
                  </p>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-[#1c2541] rounded-xl p-6 border border-[#ffd700]/10">
              <h2 className="text-2xl font-bold mb-6 text-[#ffd700]">Recent Activity</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-[#e2e8f0]">
                      <th className="pb-4">Email ID</th>
                      <th className="pb-4">Status</th>
                      <th className="pb-4">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trackingData.map((item, index) => (
                      <tr key={index} className="border-t border-[#ffd700]/10">
                        <td className="py-4 text-[#e2e8f0]">{item.emailId}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            item.status === 'sent' ? 'bg-blue-500/20 text-blue-400' :
                            item.status === 'delivered' ? 'bg-green-500/20 text-green-400' :
                            item.status === 'opened' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-purple-500/20 text-purple-400'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="py-4 text-[#e2e8f0]">
                          {new Date(item.timestamp).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  )
} 