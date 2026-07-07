import { Link } from 'react-router-dom'
import { Instagram, MapPin, Phone } from 'lucide-react'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL, branches } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ocean-950/70 text-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Kumsal Yüzme Akademisi logosu"
                className="h-14 w-14 rounded-full bg-white object-contain p-1"
              />
              <div>
                <p className="text-lg font-extrabold text-white">KUMSAL</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aqua-300">
                  Yüzme Akademisi
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md leading-relaxed">
              2008&apos;den beri Ankara&apos;da bebek, çocuk ve yetişkinlere güvenli, hijyenik ve
              profesyonel yüzme eğitimi.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-extrabold text-white">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm font-semibold">
              <li><Link to="/#programlar" className="transition hover:text-aqua-300">Programlarımız</Link></li>
              <li><Link to="/#egitmenler" className="transition hover:text-aqua-300">Eğitmenlerimiz</Link></li>
              <li><Link to="/#galeri" className="transition hover:text-aqua-300">Galeri</Link></li>
              <li><Link to="/#sss" className="transition hover:text-aqua-300">Sık Sorulan Sorular</Link></li>
              <li><Link to="/#kayit" className="transition hover:text-aqua-300">Kayıt Ol</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-extrabold text-white">Şubelerimiz</h3>
            <ul className="space-y-3 text-sm font-semibold">
              {branches.map((branch) => (
                <li key={branch.slug}>
                  <Link
                    to={`/${branch.slug}`}
                    className="group flex items-start gap-2 transition hover:text-aqua-300"
                  >
                    <MapPin size={16} className="mt-0.5 shrink-0 text-aqua-400" />
                    <span>
                      {branch.name}
                      <span className="block text-xs font-medium text-white/50">
                        {branch.pool}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 space-y-2 text-sm font-semibold">
              <a href={PHONE_TEL} className="flex items-center gap-2 transition hover:text-aqua-300">
                <Phone size={16} className="text-aqua-400" /> {PHONE_DISPLAY}
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-aqua-300"
              >
                <Instagram size={16} className="text-aqua-400" /> {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm font-medium text-white/50">
          © {new Date().getFullYear()} Kumsal Yüzme Akademisi — 2008&apos;den beri Ankara&apos;da
          yüzme eğitimi
        </div>
      </div>
    </footer>
  )
}
