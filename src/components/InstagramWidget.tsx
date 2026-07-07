import { useEffect, useState } from 'react'
import { ExternalLink, Instagram, X } from 'lucide-react'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data'

export default function InstagramWidget() {
  const [open, setOpen] = useState(false)
  const [embedLoaded, setEmbedLoaded] = useState(false)
  const [embedFailed, setEmbedFailed] = useState(false)

  // Embed makul sürede yüklenmezse profil kartına düş
  useEffect(() => {
    if (!open || embedLoaded || embedFailed) return
    const timer = window.setTimeout(() => setEmbedFailed(true), 3000)
    return () => window.clearTimeout(timer)
  }, [open, embedLoaded, embedFailed])

  return (
    <>
      {/* Sağ kenara sabit Instagram düğmesi (mobilde alt köşe) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Instagram Güncel kutusunu aç"
        className="fixed bottom-5 right-4 z-[60] flex items-center gap-2 rounded-full bg-gradient-to-tr from-fuchsia-600 via-pink-500 to-orange-400 px-4 py-3 font-bold text-white shadow-xl shadow-pink-500/30 transition hover:scale-105 md:bottom-auto md:right-0 md:top-1/2 md:-translate-y-1/2 md:rounded-l-2xl md:rounded-r-none md:px-3 md:py-4 md:[writing-mode:vertical-rl]"
      >
        <Instagram size={20} className="md:rotate-90" />
        <span className="text-sm">Instagram</span>
      </button>

      {open && (
        <div className="fixed bottom-20 right-4 z-[65] w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-2xl bg-white shadow-2xl shadow-ocean-950/30 ring-1 ring-aqua-100 md:bottom-auto md:right-16 md:top-1/2 md:-translate-y-1/2">
          <div className="flex items-center justify-between bg-gradient-to-tr from-fuchsia-600 via-pink-500 to-orange-400 px-4 py-3 text-white">
            <p className="flex items-center gap-2 font-extrabold">
              <Instagram size={18} /> Instagram Güncel
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Kutuyu kapat"
              className="rounded-full p-1 transition hover:bg-white/20"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-4">
            {!embedFailed ? (
              <iframe
                title="Kumsal Yüzme Akademisi Instagram"
                src="https://www.instagram.com/kumsalyuzmeakademisi/embed"
                className="h-72 w-full rounded-xl border border-aqua-100"
                loading="lazy"
                onLoad={() => setEmbedLoaded(true)}
                onError={() => setEmbedFailed(true)}
              />
            ) : (
              /* Embed engellenirse profil kartına düş */
              <div className="flex h-72 flex-col items-center justify-center gap-3 rounded-xl bg-aqua-50 text-center">
                <img
                  src="/images/logo.png"
                  alt="Kumsal Yüzme Akademisi"
                  className="h-16 w-16 rounded-full object-contain"
                />
                <p className="font-extrabold text-ocean-900">{INSTAGRAM_HANDLE}</p>
                <p className="px-6 text-sm text-slate-800">
                  Güncel paylaşımlarımız için profilimizi ziyaret edin.
                </p>
              </div>
            )}

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 w-full !py-2.5 text-sm"
            >
              Instagram&apos;da aç
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      )}
    </>
  )
}
