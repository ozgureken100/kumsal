import { ExternalLink, MessageSquareHeart, Star } from 'lucide-react'
import { GOOGLE_REVIEWS_URL, ratingHighlights, reviewThemes } from '../data'

export default function Reviews() {
  return (
    <section id="yorumlar" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Puanlar &amp; Yorumlar</span>
          <h2 className="section-title">Velilerimiz ve öğrencilerimiz ne diyor?</h2>
          <p className="mt-4 text-lg">
            Şubelerimizin harita ve dizin profillerindeki doğrulanabilir puanlar:
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ratingHighlights.map((item) => (
            <div key={item.branch} className="card p-8 text-center">
              <div className="mb-3 flex justify-center gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={22} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-4xl font-extrabold text-ocean-900">{item.score}</p>
              <p className="mt-2 font-bold text-aqua-700">{item.branch}</p>
              <p className="text-sm font-semibold text-slate-700">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="card mt-8 p-8 md:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h3 className="flex items-center gap-2 text-xl font-extrabold text-ocean-900">
                <MessageSquareHeart className="text-coral-500" size={24} />
                Yorumlarda öne çıkan temalar
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {reviewThemes.map((theme) => (
                  <li
                    key={theme}
                    className="flex items-start gap-2.5 rounded-xl bg-aqua-50 px-4 py-3 text-sm font-semibold text-ocean-800"
                  >
                    <Star size={16} className="mt-0.5 shrink-0 text-amber-400" fill="currentColor" />
                    {theme}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary shrink-0"
            >
              Google yorumlarını aç
              <ExternalLink size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
