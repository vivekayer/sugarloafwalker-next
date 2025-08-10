import Image from 'next/image';

export default function WideImage() {
  return (
    <section className="hidden md:block">
      <div className="mx-auto max-w-6xl px-4  mb-8">
        <div className="animated-border">
          <div className="animated-border-inner">
            <Image
              src="/images/amman-2.jpg"
              alt="Amman"
              width={1920}
              height={1080}
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-300">Live at Chaos Basement, Amman</p>
      </div>
    </section>
  );
}
