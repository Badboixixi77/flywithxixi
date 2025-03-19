interface ScheduledEmail {
  id: string
  emailData: {
    name: string
    email: string
    phone: string
    subject: string
    message: string
  }
  scheduledTime: string
  status: 'pending' | 'sent' | 'failed'
}

class EmailScheduler {
  private static instance: EmailScheduler
  private scheduledEmails: ScheduledEmail[] = []
  private intervalId: NodeJS.Timeout | null = null

  private constructor() {
    // Load scheduled emails from localStorage
    this.loadScheduledEmails()
    // Start checking for emails to send
    this.startScheduler()
  }

  static getInstance(): EmailScheduler {
    if (!EmailScheduler.instance) {
      EmailScheduler.instance = new EmailScheduler()
    }
    return EmailScheduler.instance
  }

  private loadScheduledEmails() {
    const saved = localStorage.getItem('scheduledEmails')
    if (saved) {
      this.scheduledEmails = JSON.parse(saved)
    }
  }

  private saveScheduledEmails() {
    localStorage.setItem('scheduledEmails', JSON.stringify(this.scheduledEmails))
  }

  scheduleEmail(emailData: ScheduledEmail['emailData'], scheduledTime: string): string {
    const id = `scheduled_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    
    this.scheduledEmails.push({
      id,
      emailData,
      scheduledTime,
      status: 'pending'
    })

    this.saveScheduledEmails()
    return id
  }

  private startScheduler() {
    // Check every minute
    this.intervalId = setInterval(() => {
      this.checkScheduledEmails()
    }, 60000)
  }

  private async checkScheduledEmails() {
    const now = new Date()

    for (const email of this.scheduledEmails) {
      if (email.status === 'pending' && new Date(email.scheduledTime) <= now) {
        try {
          // Send the email
          await sendEmail(email.emailData)
          email.status = 'sent'
        } catch (error) {
          console.error('Failed to send scheduled email:', error)
          email.status = 'failed'
        }
      }
    }

    this.saveScheduledEmails()
  }

  stopScheduler() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  getScheduledEmails(): ScheduledEmail[] {
    return this.scheduledEmails
  }
}

export const emailScheduler = EmailScheduler.getInstance() 