'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const nav = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#music', label: 'Music' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#press', label: 'Press' },
  { href: '#contact', label: 'Contact' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#home" className="font-semibold tracking-wide">
          <span className="font-brand text-brand-400 tracking-wide text-xl md:text-2xl">Sugar Loaf Walker</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm text-gray-200">
          {nav.map(i => (
            <a key={i.href} href={i.href} className="hover:text-white transition">
              {i.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
            className="hidden md:inline-flex px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 text-black font-medium transition"
        >
          Contact me
        </a>
      </div>
    </header>
  )
}
