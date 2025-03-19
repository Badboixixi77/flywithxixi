'use client'

type AnalyticsEvent = 'form_start' | 'form_submit' | 'form_error'

interface AnalyticsData {
  formId: string
  event: AnalyticsEvent
  errorType?: string
  timestamp: string
  url: string
  userAgent: string
}

export const sendAnalytics = async (data: {
  formId: string
  event: AnalyticsEvent
  errorType?: string
}) => {
  try {
    const analyticsData: AnalyticsData = {
      ...data,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: window.navigator.userAgent
    }

    // You would typically send this to your analytics endpoint
    console.log('Form Analytics:', analyticsData)
  } catch (error) {
    console.error('Analytics Error:', error)
  }
} 