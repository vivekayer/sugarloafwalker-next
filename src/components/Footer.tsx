type Social = { name: string; slug: string; href: string }

const socials: Social[] = [
  { name: 'YouTube', slug: 'youtube', href: 'https://www.youtube.com/@sugarloafwalker' },
  { name: 'Instagram', slug: 'instagram', href: 'https://www.instagram.com/sugarloafwalkermusic/' },
  { name: 'Spotify', slug: 'spotify', href: 'https://open.spotify.com/artist/62qGJFvCYDyY03J9kLumly?si=OBDmWiCdQ22uRSCd1o7Khw' },
  { name: 'Apple Music', slug: 'applemusic', href: 'https://music.apple.com/us/artist/sugar-loaf-walker/1536851464' },
  { name: 'Bandcamp', slug: 'bandcamp', href: 'https://sugarloafwalker.bandcamp.com' },
];

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Sugar Loaf Walker. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          {socials.map((s) => {
            const iconSrc = `https://cdn.simpleicons.org/${s.slug}/ffffff`
            return (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.name}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
              >
                <img src={iconSrc} width={18} height={18} alt="" aria-hidden className="block" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
