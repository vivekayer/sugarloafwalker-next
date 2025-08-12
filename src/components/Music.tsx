export default function Music() {
  return (
    <section id="music" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="section-title">Music & Video</h2>
        <p className="mt-2 mb-6 text-gray-300">
          Find my music on Bandcamp, Spotify, Apple Music and YouTube.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass p-4">
            <div className="relative w-full h-[560px] md:h-[870px]">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://bandcamp.com/EmbeddedPlayer/album=1153531854/size=large/bgcol=333333/linkcol=e99708/transparent=true/"
                title="Bandcamp album player"
                loading="lazy"
                style={{ border: 0 }}
              >
                <a href="https://sugarloafwalker.bandcamp.com/album/benign-penny">
                  Benign Penny by Sugar Loaf Walker
                </a>
              </iframe>
            </div>
            <p className="mt-3 text-sm text-gray-300">
              Debut album <em>Benign Penny</em> on Bandcamp
            </p>
          </div>

          {/* Right column: two stacked YouTube videos on desktop */}
          <div className="flex flex-col gap-6">
            <div className="glass p-4">
              <div className="relative w-full aspect-video md:aspect-auto md:h-[390px]">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/FXGvOHe6Llo?rel=0&modestbranding=1&playsinline=1"
                  title="Capers"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-sm text-gray-300">Pink House</p>
            </div>

            <div className="glass p-4">
              <div className="relative w-full aspect-video md:aspect-auto md:h-[390px]">
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/w6BooM3N2Us?rel=0&modestbranding=1&playsinline=1"
                  title="Man of Mystery"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-sm text-gray-300">Man of Mystery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
