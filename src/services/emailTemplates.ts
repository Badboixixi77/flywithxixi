interface TemplateData {
  from_name: string
  from_email: string
  phone_number: string
  subject: string
  message: string
  email_id: string
}

export const getEmailTemplate = (templateName: string, data: TemplateData) => {
  switch (templateName) {
    case 'contact':
      return contactTemplate(data)
    case 'charter':
      return charterTemplate(data)
    case 'booking':
      return bookingTemplate(data)
    default:
      return defaultTemplate(data)
  }
}

const contactTemplate = (data: TemplateData) => `
<!DOCTYPE html>
<html>
<head>
    <title>New Contact Form Submission - FlyWithXiXi</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(to right, #ffd700, #ffed4a); padding: 20px; color: #0a1128; }
        .content { padding: 20px; background: #f9f9f9; }
        .footer { text-align: center; padding: 20px; color: #666; }
        .detail { margin: 10px 0; }
        .label { font-weight: bold; color: #0a1128; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
            <div class="detail">
                <span class="label">Name:</span> ${data.from_name}
            </div>
            <div class="detail">
                <span class="label">Email:</span> ${data.from_email}
            </div>
            <div class="detail">
                <span class="label">Phone:</span> ${data.phone_number}
            </div>
            <div class="detail">
                <span class="label">Subject:</span> ${data.subject}
            </div>
            <div class="detail">
                <span class="label">Message:</span><br>
                ${data.message}
            </div>
        </div>
        <div class="footer">
            <p>This is an automated message from FlyWithXiXi's contact form.</p>
            <img src="https://yourwebsite.com/track/${data.email_id}" alt="" style="width:1px;height:1px;" />
        </div>
    </div>
</body>
</html>
`

const charterTemplate = (data: TemplateData) => `
<!DOCTYPE html>
<html>
<head>
    <title>Charter Inquiry - FlyWithXiXi</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { 
          background: linear-gradient(to right, #ffd700, #ffed4a); 
          padding: 20px; 
          color: #0a1128;
          border-radius: 8px 8px 0 0;
        }
        .content { padding: 20px; background: #f9f9f9; }
        .footer { 
          text-align: center; 
          padding: 20px; 
          color: #666;
          border-radius: 0 0 8px 8px;
          background: #f0f0f0;
        }
        .detail { margin: 10px 0; }
        .label { font-weight: bold; color: #0a1128; }
        .priority { 
          background: #ffd700; 
          color: #0a1128; 
          padding: 5px 10px; 
          border-radius: 4px;
          display: inline-block;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Charter Inquiry</h1>
            <p class="priority">High Priority</p>
        </div>
        <div class="content">
            <div class="detail">
                <span class="label">Client Name:</span> ${data.from_name}
            </div>
            <div class="detail">
                <span class="label">Email:</span> ${data.from_email}
            </div>
            <div class="detail">
                <span class="label">Phone:</span> ${data.phone_number}
            </div>
            <div class="detail">
                <span class="label">Inquiry Details:</span><br>
                ${data.message}
            </div>
        </div>
        <div class="footer">
            <p>Please respond to charter inquiries within 2 hours.</p>
            <img src="https://yourwebsite.com/track/${data.email_id}" alt="" style="width:1px;height:1px;" />
        </div>
    </div>
</body>
</html>
`

const bookingTemplate = (data: TemplateData) => `
<!DOCTYPE html>
<html>
<head>
    <title>Booking Request - FlyWithXiXi</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(to right, #ffd700, #ffed4a); padding: 20px; color: #0a1128; }
        .content { padding: 20px; background: #f9f9f9; }
        .footer { text-align: center; padding: 20px; color: #666; }
        .detail { margin: 10px 0; }
        .label { font-weight: bold; color: #0a1128; }
        .booking-status {
          background: #4CAF50;
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          display: inline-block;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Booking Request</h1>
            <p class="booking-status">New Request</p>
        </div>
        <div class="content">
            <div class="detail">
                <span class="label">Client Name:</span> ${data.from_name}
            </div>
            <div class="detail">
                <span class="label">Email:</span> ${data.from_email}
            </div>
            <div class="detail">
                <span class="label">Phone:</span> ${data.phone_number}
            </div>
            <div class="detail">
                <span class="label">Booking Details:</span><br>
                ${data.message}
            </div>
        </div>
        <div class="footer">
            <p>Please process booking requests within 24 hours.</p>
            <img src="https://yourwebsite.com/track/${data.email_id}" alt="" style="width:1px;height:1px;" />
        </div>
    </div>
</body>
</html>
`

const defaultTemplate = (data: TemplateData) => `
<!DOCTYPE html>
<html>
<head>
    <title>Message from FlyWithXiXi</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(to right, #ffd700, #ffed4a); padding: 20px; color: #0a1128; }
        .content { padding: 20px; background: #f9f9f9; }
        .footer { text-align: center; padding: 20px; color: #666; }
        .detail { margin: 10px 0; }
        .label { font-weight: bold; color: #0a1128; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${data.subject}</h1>
        </div>
        <div class="content">
            <div class="detail">
                <span class="label">From:</span> ${data.from_name}
            </div>
            <div class="detail">
                <span class="label">Email:</span> ${data.from_email}
            </div>
            <div class="detail">
                <span class="label">Phone:</span> ${data.phone_number}
            </div>
            <div class="detail">
                <span class="label">Message:</span><br>
                ${data.message}
            </div>
        </div>
        <div class="footer">
            <p>This is an automated message from FlyWithXiXi.</p>
            <img src="https://yourwebsite.com/track/${data.email_id}" alt="" style="width:1px;height:1px;" />
        </div>
    </div>
</body>
</html>
` 