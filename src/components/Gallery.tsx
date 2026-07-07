import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { galleryItems, type GalleryCategory } from '../data'

const categories: Array<'Tümü' | GalleryCategory> = ['Tümü', 'Çocuk', 'Tesis', 'Eğitim']

export default function Gallery() {
  const [active, setActive] = useState<(typeof categories)[number]>('Tümü')
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  const visible =
    active === 'Tümü' ? galleryItems : galleryItems.filter((item) => item.category === active)

  // Lightbox açıkken ESC ile kapat
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <section id="galeri" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Galeri</span>
          <h2 className="section-title">Havuzdan gerçek kareler</h2>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                active === category
                  ? 'bg-ocean-800 text-white shadow-lg shadow-ocean-900/20'
                  : 'bg-white/90 text-ocean-800 ring-1 ring-ocean-100 hover:bg-aqua-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4 [&>button]:mb-4">
          {visible.map((item) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setLightbox(item)}
              className="group block w-full overflow-hidden rounded-xl shadow-md shadow-ocean-900/10 focus:outline-none focus:ring-2 focus:ring-aqua-400"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Büyük gösterim */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ocean-950/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Kapat"
          >
            <X size={26} />
          </button>
          <figure className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-h-[82vh] w-auto rounded-xl object-contain shadow-2xl"
            />
            <figcaption className="mt-3 text-center font-semibold text-white/90">
              {lightbox.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
