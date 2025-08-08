
'use client'

import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="section-title">Contact</h2>
        <div className="glass p-6">
          <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-1">
              <label className="block text-sm text-gray-300 mb-1">Name</label>
              <input
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div className="md:col-span-2 flex items-center gap-3">
              <button
                disabled={status === "loading"}
                className="px-5 py-3 rounded-lg bg-brand-500 hover:bg-brand-600 disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send"}
              </button>
              {status === "success" && (
                <span className="text-green-400 text-sm">
                  Thanks! I’ll get back soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-red-400 text-sm">
                  Something went wrong. Try again.
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
