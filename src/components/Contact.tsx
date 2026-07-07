import { useEffect, useState, type FormEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { Instagram, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  branches,
  programs,
  waLink,
} from '../data'

export default function Contact() {
  const location = useLocation()
  const preselected = (location.state as { program?: string } | null)?.program ?? ''

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    program: preselected,
    branch: '',
    note: '',
  })

  useEffect(() => {
    if (preselected) {
      setForm((f) => ({ ...f, program: preselected }))
    }
  }, [preselected])

  const update = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }))

  // Form gönderimi WhatsApp üzerinden iletilir; sahte backend yoktur.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const lines = [
      'Merhaba, kayıt olmak istiyorum.',
      `Ad Soyad: ${form.name}`,
      `Telefon: ${form.phone}`,
      form.email ? `E-posta: ${form.email}` : '',
      `Program: ${form.program || 'Henüz seçmedim'}`,
      `Şube: ${form.branch || 'Henüz seçmedim'}`,
      form.note ? `Not: ${form.note}` : '',
    ].filter(Boolean)
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'w-full rounded-xl border border-aqua-100 bg-white px-4 py-3 text-sm font-medium text-ocean-900 placeholder:text-slate-400 focus:border-aqua-400 focus:outline-none focus:ring-2 focus:ring-aqua-200'

  return (
    <section id="kayit" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">İletişim &amp; Kayıt</span>
          <h2 className="section-title">Kaydınızı birlikte planlayalım</h2>
          <p className="mt-4 text-lg">
            Formu doldurun, bilgileriniz WhatsApp üzerinden bize iletilsin; aynı gün dönüş yapalım.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[2fr_3fr]">
          {/* İletişim bilgileri */}
          <div className="card flex flex-col gap-6 bg-gradient-to-br from-ocean-800 to-ocean-950 p-8 text-white">
            <h3 className="text-xl font-extrabold">İletişim Bilgileri</h3>

            <a href={PHONE_TEL} className="group flex items-start gap-4">
              <span className="rounded-xl bg-white/10 p-3 transition group-hover:bg-white/20">
                <Phone size={22} className="text-aqua-300" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white/60">
                  Telefon &amp; WhatsApp
                </span>
                <span className="block text-lg font-extrabold">{PHONE_DISPLAY}</span>
              </span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4"
            >
              <span className="rounded-xl bg-white/10 p-3 transition group-hover:bg-white/20">
                <Instagram size={22} className="text-aqua-300" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white/60">Instagram</span>
                <span className="block text-lg font-extrabold">{INSTAGRAM_HANDLE}</span>
              </span>
            </a>

            <div className="flex items-start gap-4">
              <span className="rounded-xl bg-white/10 p-3">
                <MapPin size={22} className="text-aqua-300" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white/60">Adres</span>
                <span className="block font-bold leading-relaxed">
                  Kızılay (TED Üniversitesi Havuzu), Batıkent ve Söğütözü / Ankara
                </span>
              </span>
            </div>

            <a
              href={waLink('Merhaba, yüzme dersleri hakkında bilgi almak istiyorum.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-auto w-full"
            >
              <MessageCircle size={20} />
              WhatsApp ile Hemen Yaz
            </a>
          </div>

          {/* Kayıt formu */}
          <form onSubmit={handleSubmit} className="card grid gap-4 p-8 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-ocean-900">
                Ad Soyad *
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => update('name')(e.target.value)}
                placeholder="Adınız Soyadınız"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-bold text-ocean-900">
                Telefon *
              </label>
              <input
                id="phone"
                required
                type="tel"
                value={form.phone}
                onChange={(e) => update('phone')(e.target.value)}
                placeholder="05xx xxx xx xx"
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-ocean-900">
                E-posta
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update('email')(e.target.value)}
                placeholder="ornek@eposta.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="program" className="mb-1.5 block text-sm font-bold text-ocean-900">
                Program Seçimi *
              </label>
              <select
                id="program"
                required
                value={form.program}
                onChange={(e) => update('program')(e.target.value)}
                className={inputClass}
              >
                <option value="">Program seçiniz</option>
                {programs.map((p) => (
                  <option key={p.id} value={p.title}>
                    {p.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="branch" className="mb-1.5 block text-sm font-bold text-ocean-900">
                Şube Seçimi *
              </label>
              <select
                id="branch"
                required
                value={form.branch}
                onChange={(e) => update('branch')(e.target.value)}
                className={inputClass}
              >
                <option value="">Şube seçiniz</option>
                {branches.map((b) => (
                  <option key={b.slug} value={b.name}>
                    {b.name} — {b.pool}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="note" className="mb-1.5 block text-sm font-bold text-ocean-900">
                Notunuz
              </label>
              <textarea
                id="note"
                rows={4}
                value={form.note}
                onChange={(e) => update('note')(e.target.value)}
                placeholder="Yaş, seviye, tercih ettiğiniz gün/saat gibi bilgiler…"
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="btn-primary w-full">
                <Send size={18} />
                Gönder
              </button>
              <p className="mt-3 text-center text-xs font-medium text-slate-700">
                Gönder butonu bilgilerinizi WhatsApp mesajı olarak hazırlar; onaylayıp
                gönderdiğinizde bize ulaşır.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
