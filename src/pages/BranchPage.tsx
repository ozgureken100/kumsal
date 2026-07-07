import { Link } from 'react-router-dom'
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  ExternalLink,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from 'lucide-react'
import FAQ from '../components/FAQ'
import { usePageMeta } from '../hooks/usePageMeta'
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  asset,
  waLink,
  type Branch,
} from '../data'

export default function BranchPage({ branch }: { branch: Branch }) {
  usePageMeta(
    `${branch.title} | Kumsal Yüzme Akademisi`,
    `${branch.title}: ${branch.pool}'nda çocuk, kadın ve yetişkinlere profesyonel yüzme eğitimi. ${branch.rating} puan. Bilgi: 0542 553 22 09`,
  )

  return (
    <>
      {/* Şube hero */}
      <section className="relative overflow-hidden bg-ocean-950">
        <img
          src={asset(branch.image)}
          alt={branch.title}
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-sm"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[3fr_2fr] lg:py-20">
          <div className="text-white">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold backdrop-blur">
              <MapPin size={15} className="text-aqua-300" /> {branch.name} / Ankara
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">{branch.title}</h1>
            <p className="mt-3 text-xl font-bold text-aqua-300">{branch.pool}</p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              {branch.description}
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-3 backdrop-blur">
              <span className="flex gap-0.5 text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </span>
              <span className="text-lg font-extrabold">{branch.rating}</span>
              <span className="text-sm font-semibold text-white/70">{branch.ratingDetail}</span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/#kayit" className="btn-primary">
                Kayıt Formuna Git
              </Link>
              <a
                href={waLink(`Merhaba, ${branch.name} şubesi hakkında bilgi almak istiyorum.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={20} />
                WhatsApp ile Sor
              </a>
            </div>
          </div>

          <img
            src={asset(branch.image)}
            alt={`${branch.title} afişi`}
            className="mx-auto w-full max-w-sm rounded-2xl shadow-2xl shadow-ocean-950/60 ring-4 ring-white/10"
          />
        </div>
      </section>

      {/* Bilgi kartları */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3">
          <div className="card p-7">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-ocean-900">
              <Phone size={20} className="text-aqua-500" /> İletişim
            </h2>
            <a href={PHONE_TEL} className="block text-2xl font-extrabold text-ocean-900">
              {PHONE_DISPLAY}
            </a>
            <p className="mt-1 text-sm font-semibold text-slate-700">Telefon &amp; WhatsApp</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 font-bold text-aqua-700 transition hover:text-aqua-500"
            >
              <Instagram size={18} /> {INSTAGRAM_HANDLE}
            </a>
            <p className="mt-4 flex items-start gap-2 text-sm font-semibold leading-relaxed text-slate-800">
              <MapPin size={17} className="mt-0.5 shrink-0 text-aqua-500" />
              {branch.address}
            </p>
          </div>

          <div className="card p-7">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-ocean-900">
              <CalendarDays size={20} className="text-aqua-500" /> Ders Saatleri
            </h2>
            <div className="space-y-4">
              {branch.schedule.map((slot) => (
                <div key={slot.label}>
                  <p className="text-sm font-extrabold text-aqua-700">{slot.label}</p>
                  <ul className="mt-1.5 space-y-1.5">
                    {slot.hours.map((hour) => (
                      <li
                        key={hour}
                        className="flex items-center gap-2 text-sm font-semibold text-ocean-800"
                      >
                        <Clock size={15} className="shrink-0 text-slate-400" /> {hour}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs font-medium text-slate-700">
              Kontenjanlar sınırlıdır; güncel durum için lütfen arayınız.
            </p>
          </div>

          {/* Harita alanı */}
          <div className="card overflow-hidden">
            <div className="flex items-center justify-between px-7 pb-3 pt-7">
              <h2 className="flex items-center gap-2 text-lg font-extrabold text-ocean-900">
                <MapPin size={20} className="text-aqua-500" /> Konum
              </h2>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-bold text-aqua-700 transition hover:text-aqua-500"
              >
                Haritada aç <ExternalLink size={14} />
              </a>
            </div>
            <iframe
              title={`${branch.title} harita`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(branch.mapQuery)}&output=embed`}
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Şubeye özel SSS */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FAQ compact items={branch.faq} title={`${branch.name} şubesi hakkında sık sorulanlar`} />
        </div>
      </section>

      {/* Şube tanıtım yazısı */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <article className="card p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-ocean-900 md:text-3xl">
              {branch.seo.title}
            </h2>
            {branch.seo.intro.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-slate-800">
                {p}
              </p>
            ))}

            {branch.seo.sections.map((section) => (
              <div key={section.heading} className="mt-8">
                <h3 className="text-lg font-extrabold text-ocean-900">{section.heading}</h3>
                {section.paragraphs?.map((p) => (
                  <p key={p} className="mt-3 leading-relaxed text-slate-800">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-3 space-y-2">
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm font-medium text-slate-800"
                      >
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-aqua-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.after && (
                  <p className="mt-3 leading-relaxed text-slate-800">{section.after}</p>
                )}
              </div>
            ))}

            <div className="mt-8">
              <h3 className="text-lg font-extrabold text-ocean-900">Anahtar Aramalar</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {branch.seo.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="inline-flex rounded-full bg-aqua-100 px-3 py-1.5 text-xs font-bold text-aqua-800"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-8 font-semibold leading-relaxed text-ocean-800">
              {branch.seo.outro}
            </p>
          </article>
        </div>
      </section>

      {/* Kayıt CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="card bg-gradient-to-br from-ocean-800 to-ocean-950 p-10 text-center text-white">
            <h2 className="text-2xl font-extrabold md:text-3xl">
              {branch.name} şubesinde yerinizi ayırtın
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">
              Seviyenize uygun grubu birlikte belirleyelim; kaydınızı hemen başlatalım.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/#kayit" className="btn-primary">
                Hemen Kayıt Ol
              </Link>
              <a href={PHONE_TEL} className="btn-secondary">
                <Phone size={18} /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
