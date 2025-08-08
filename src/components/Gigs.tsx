import type { Gig } from '@/lib/types'
import { CalendarDays } from 'lucide-react'

const gigs: Gig[] = [
  //{ date: '2025-09-10', venue: 'Blue Note', city: 'New York, NY', link: '#tickets' },
]

function formatDate(d: string) {
  try {
    const dt = new Date(d)
    return dt.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return d
  }
}

export default function Gigs() {
  return (
    <section id="gigs" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-baseline gap-3 mb-6">
          <CalendarDays className="text-brand-400 w-[1em] h-[1em]" aria-hidden />
          <h2 className="section-title m-0">Upcoming Gigs</h2>
        </div>
        <div className="grid gap-4">
          {gigs.map((g, i) => (
            <div key={i} className="glass p-5 flex items-center justify-between flex-wrap gap-3">
              <div>
                <div className="font-medium">{g.venue}</div>
                <div className="text-sm text-gray-300">{g.city}</div>
              </div>
              <div className="text-sm text-gray-2 00">{formatDate(g.date)}</div>
              <div className="flex gap-2">
                {g.soldOut ? (
                  <span className="px-3 py-1 rounded-md bg-red-600/30 border border-red-600/50 text-red-200 text-xs">Sold Out</span>
                ) : (
                  <a href={g.link ?? '#contact'} className="px-3 py-1 rounded-md bg-brand-500 hover:bg-brand-600 text-xs">
                    Tickets
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
