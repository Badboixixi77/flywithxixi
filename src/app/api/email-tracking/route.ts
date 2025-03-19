import { NextResponse } from 'next/server'
import { trackEmail } from '@/services/emailService'

export async function POST(request: Request) {
  try {
    const { emailId, status } = await request.json()
    
    await trackEmail({
      emailId,
      status,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email tracking error:', error)
    return NextResponse.json(
      { error: 'Failed to track email' },
      { status: 500 }
    )
  }
} 