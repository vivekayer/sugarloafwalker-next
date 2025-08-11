
'use client'

import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  const isProd = process.env.NODE_ENV === 'production'

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    if (!serviceId || !templateId || !publicKey || !formRef.current) {
      const msg = 'Email service not configured.'
      if (!isProd) {
        console.error('EmailJS environment variables missing', { hasServiceId: !!serviceId, hasTemplateId: !!templateId, hasPublicKey: !!publicKey })
        setErrorMsg(msg + ' (dev detail: check NEXT_PUBLIC_* vars & restart dev server)')
      }
      setStatus('error')
      return
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        { publicKey }
      )
  if (!isProd) console.debug('EmailJS response', result)
      if (result.status === 200) {
        setStatus('success')
        setErrorMsg(null)
        formRef.current.reset()
      } else {
        setStatus('error')
        if (!isProd) setErrorMsg(`Unexpected EmailJS status: ${result.status}`)
      }
    } catch (err) {
      if (!isProd) {
        const message = err instanceof Error ? err.message : typeof err === 'string' ? err : JSON.stringify(err)
        console.error('EmailJS error', err)
        setErrorMsg(message)
      }
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="section-title">Contact</h2>
        <div className="glass p-6">
          <form ref={formRef} onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-1">
              <label htmlFor="contact-name" className="block text-sm text-gray-300 mb-1">Name</label>
              <input
                id="contact-name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="contact-email" className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="contact-message" className="block text-sm text-gray-300 mb-1">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div className="md:col-span-2 flex items-center gap-3">
              <button
                disabled={status === "loading"}
                className="px-5 py-3 rounded-lg bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-black"
              >
                {status === "loading" ? "Sending..." : "Send"}
              </button>
              {status === "success" && (
                <span className="text-green-400 text-sm" role="status">
                  Thanks! I’ll get back soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-red-400 text-sm" role="alert">
                  Something went wrong. Try again.
                  {!isProd && errorMsg && (
                    <span className="block mt-1 opacity-80">{errorMsg}</span>
                  )}
                </span>
              )}
            </div>
          </form>
          <div className="mt-6 text-sm text-gray-300">
            Prefer email?{" "}
            <a href="mailto:sugarloafwalker@gmail.com" className="underline">
              sugarloafwalker@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
