import { ExternalLink } from 'lucide-react'

export type PressItem = {
  title: string
  outlet: string
  date?: string
  href: string
}

const defaultPress: PressItem[] = [
  {
    title: "Interview",
    outlet: "The Big Takeover (New York)",
    href: "https://bigtakeover.com/interviews/AShortConversationwithSugarLoafWalker",
  },
  {
    title: "Album review",
    outlet: "Dancing About Architecture — Dave Franklin (UK)",
    href: "https://dancing-about-architecture.com/benign-penny-sugar-loaf-walker-reviewed-by-dave-franklin/",
  },
  {
    title: "Album review",
    outlet: "Sleeping Bag Studios (Canada)",
    href: "https://sleepingbagstudios.ca/sugar-loaf-walker-benign-penny/",
  },
  {
    title: "TUNEDLOUD Review",
    outlet: "TUNEDLOUD",
    href: "http://www.tunedloud.com/2021/06/04/sugar-loaf-walker-benign-penny-delivers-melody-nuance-timbre-and-tone/",
  },
];

export default function Press({ items = defaultPress }: { items?: PressItem[] }) {
  return (
    <section id="press" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="section-title">Press</h2>
        <ul className="grid grid-cols-1 gap-4">
          {items.map((p, i) => (
            <li key={i}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer noopener"
                className="glass p-5 flex items-center justify-between gap-4 hover:bg-white/10 transition"
                aria-label={`${p.title} — ${p.outlet}`}
              >
                <div>
                  <div className="font-medium">
                    {p.title}
                  </div>
                  <div className="text-sm text-gray-300">
                    {p.outlet}
                    {p.date ? ` • ${new Date(p.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}` : ''}
                  </div>
                </div>
                <ExternalLink className="text-gray-400" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
