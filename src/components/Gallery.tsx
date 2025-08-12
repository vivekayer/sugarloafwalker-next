import Image from 'next/image'

const photos = [
  { src: "/images/benign-penny/01.jpg", alt: "Benign Penny - 01" },
  { src: "/images/benign-penny/02.jpg", alt: "Benign Penny - 02" },
  { src: "/images/benign-penny/03.jpg", alt: "Benign Penny - 03" },
  { src: "/images/benign-penny/04.jpg", alt: "Benign Penny - 04" },
  { src: "/images/benign-penny/05.jpg", alt: "Benign Penny - 05" },
  { src: "/images/benign-penny/06.jpg", alt: "Benign Penny - 06" },
  { src: "/images/benign-penny/07.jpg", alt: "Benign Penny - 07" },
  { src: "/images/benign-penny/08.jpg", alt: "Benign Penny - 08" },
  { src: "/images/benign-penny/09.jpg", alt: "Benign Penny - 09" },
  { src: "/images/benign-penny/11.png", alt: "Benign Penny - 11" },
  { src: "/images/benign-penny/10.jpg", alt: "Benign Penny - 10" },
  { src: "/images/benign-penny/13.jpg", alt: "Benign Penny - 13" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="section-title">Artwork</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden bg-white/5">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-contain object-center transform-gpu transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
