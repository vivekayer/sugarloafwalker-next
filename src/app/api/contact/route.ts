import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, message } = data || {}

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }

    // Basic email shape validation
    const emailRegex = /.+@.+\..+/
    if (!emailRegex.test(String(email))) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Ensure required env vars
    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT ?? 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const from = process.env.SMTP_FROM
    const to = process.env.SMTP_TO

    if (!host || !user || !pass || !from || !to) {
      console.error('Missing SMTP env vars')
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const subject = `New message from ${name}`
    const text = `${message}\n\nFrom: ${name} <${email}>`

    await transporter.sendMail({ from, to, subject, text })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error', err)
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}
