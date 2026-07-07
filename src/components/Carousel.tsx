import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { asset, carouselItems } from '../data'

export default function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)

  // Otomatik yatay kaydırma
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const timer = window.setInterval(() => {
      if (paused) return
      const maxScroll = track.scrollWidth - track.clientWidth
      if (track.scrollLeft >= maxScroll - 8) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        track.scrollBy({ left: 320, behavior: 'smooth' })
      }
    }, 3500)
    return () => window.clearInterval(timer)
  }, [paused])

  const scrollBy = (delta: number) => {
    trackRef.current?.scrollBy({ left: delta, behavior: 'smooth' })
  }

  return (
    <section className="relative -mt-10 z-20 pb-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className="card relative overflow-hidden p-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
          >
            {carouselItems.map((item) => (
              <figure
                key={item.caption}
                className="relative w-72 shrink-0 snap-start overflow-hidden rounded-xl sm:w-80"
              >
                <img
                  src={asset(item.src)}
                  alt={item.caption}
                  loading="lazy"
                  className="h-52 w-full object-cover transition duration-500 hover:scale-105 sm:h-56"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-950/85 to-transparent px-4 pb-3 pt-8 text-sm font-bold text-white">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollBy(-340)}
            aria-label="Önceki görseller"
            className="absolute left-6 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 text-ocean-900 shadow-lg transition hover:bg-white md:block"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(340)}
            aria-label="Sonraki görseller"
            className="absolute right-6 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 text-ocean-900 shadow-lg transition hover:bg-white md:block"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  )
}
