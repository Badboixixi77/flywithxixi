import { NextResponse } from 'next/server'
import { sendEmail } from '@/services/emailService'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Validate reCAPTCHA
    const recaptchaResponse = await validateRecaptcha(data.recaptchaToken)
    if (!recaptchaResponse.success) {
      return NextResponse.json(
        { error: 'Invalid reCAPTCHA' },
        { status: 400 }
      )
    }

    // Send email using EmailJS
    await sendEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    })

    // Store in database (example)
    // await saveToDatabase(data)

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

async function validateRecaptcha(token: string) {
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  })
  
  return response.json()
} 