
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Sugar Loaf Walker | Guitarist",
  description:
    "Sugar Loaf Walker Official page — guitarist, performer, composer.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Sugar Loaf Walker | Guitarist",
    description: "Sugar Loaf Walker | Guitarist, performer, composer.",
    images: [
      {
        url: "/images/vivek-main.jpg",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://sugarloafwalker.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-slate-950 text-white">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
