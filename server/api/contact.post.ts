import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Validate input
  if (!body.name || !body.email || !body.message) {
    throw createError({
      statusCode: 400,
      message: 'Missing required fields'
    })
  }

  const config = useRuntimeConfig()

  // Check if environment variables are set
  if (!config.smtpHost || !config.smtpUser || !config.smtpPass) {
    console.error('Missing SMTP configuration:', {
      hasHost: !!config.smtpHost,
      hasUser: !!config.smtpUser,
      hasPass: !!config.smtpPass,
    })
    throw createError({
      statusCode: 500,
      message: 'SMTP not configured'
    })
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: config.smtpPort === '465',
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  })

  try {
    await transporter.sendMail({
      from: config.smtpUser,
      to: config.smtpTo,
      subject: `Contact from ${body.name}`,
      replyTo: body.email,
      text: `
Name: ${body.name}
Email: ${body.email}

Message:
${body.message}
      `,
      html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${body.name}</p>
<p><strong>Email:</strong> ${body.email}</p>
<p><strong>Message:</strong></p>
<p>${body.message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('Email sending failed:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to send email'
    })
  }
})
