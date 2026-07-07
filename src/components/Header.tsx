import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, MapPin, Menu, Phone, X } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, branches } from '../data'

const navItems = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'Hakkımızda', to: '/#hakkimizda' },
  { label: 'Programlarımız', to: '/#programlar' },
  { label: 'Eğitmenlerimiz', to: '/#egitmenler' },
  { label: 'Galeri', to: '/#galeri' },
  { label: 'Sık Sorulan Sorular', to: '/#sss' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [branchOpen, setBranchOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  // Rota değişince menüleri kapat
  useEffect(() => {
    setMobileOpen(false)
    setBranchOpen(false)
  }, [location])

  // Dışarı tıklanınca şube menüsünü kapat
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setBranchOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1440]/70 shadow-lg shadow-black/20 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Kumsal Yüzme Akademisi logosu"
            className="h-12 w-12 rounded-full object-contain"
          />
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-white">
              KUMSAL
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-aqua-300">
              Yüzme Akademisi
            </span>
          </span>
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="rounded-full px-3 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-aqua-200"
            >
              {item.label}
            </Link>
          ))}

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setBranchOpen((v) => !v)}
              className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10 hover:text-aqua-200"
              aria-expanded={branchOpen}
            >
              Şubelerimiz
              <ChevronDown
                size={16}
                className={`transition-transform ${branchOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {branchOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-aqua-100 bg-white shadow-xl shadow-ocean-900/10">
                {branches.map((branch) => (
                  <Link
                    key={branch.slug}
                    to={`/${branch.slug}`}
                    className="flex items-start gap-3 px-4 py-3 transition hover:bg-aqua-50"
                  >
                    <MapPin size={18} className="mt-0.5 shrink-0 text-aqua-500" />
                    <span>
                      <span className="block text-sm font-bold text-ocean-900">{branch.name}</span>
                      <span className="block text-xs text-slate-700">{branch.pool}</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_TEL}
            className="hidden items-center gap-2 text-sm font-bold text-white transition hover:text-aqua-300 lg:flex xl:hidden 2xl:flex"
          >
            <Phone size={16} className="text-aqua-300" />
            {PHONE_DISPLAY}
          </a>
          <Link to="/#kayit" className="btn-primary hidden !px-5 !py-2.5 text-sm md:inline-flex">
            Hemen Kayıt Ol
          </Link>

          {/* Mobil menü düğmesi */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-full p-2 text-white transition hover:bg-white/10 xl:hidden"
            aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      {mobileOpen && (
        <nav className="border-t border-white/10 bg-[#0b1440]/95 backdrop-blur-md xl:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="block rounded-xl px-4 py-3 font-semibold text-white/90 transition hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <div className="rounded-xl bg-white/10 px-4 py-3">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-aqua-300">
                Şubelerimiz
              </p>
              {branches.map((branch) => (
                <Link
                  key={branch.slug}
                  to={`/${branch.slug}`}
                  className="flex items-center gap-2 rounded-lg px-2 py-2 font-semibold text-white/90 transition hover:bg-white/10"
                >
                  <MapPin size={16} className="text-aqua-300" />
                  {branch.name}
                </Link>
              ))}
            </div>
            <Link to="/#kayit" className="btn-primary mt-2 w-full">
              Hemen Kayıt Ol
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
