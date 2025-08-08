import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="section pt-32 relative overflow-hidden min-h-[70vh] md:min-h-[80vh]"
    >
      {/* Background image */}
      <Image
        src="/images/vivek-main-1.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden
        className="z-0 pointer-events-none select-none object-cover object-center"
      />
      {/* Soft gradient overlay for contrast (lighter) */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-slate-900/10 via-slate-950/25 to-slate-950/55" />

      <div className="relative z-[2] mx-auto max-w-6xl px-4">
        <div className="glass p-8 md:p-12">
          <h1 className="font-brand text-4xl md:text-6xl font-bold tracking-tight">
            Sugar Loaf Walker
          </h1>
          <p className="font-brand mt-4 text-gray-200 max-w-2xl">
            guitarist. performer. composer
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#music"
              className="px-5 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200"
            >
              Listen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
