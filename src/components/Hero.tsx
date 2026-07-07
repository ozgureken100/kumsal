import { MessageCircle, ShieldCheck, Sparkles } from 'lucide-react'
import { asset, waLink } from '../data'

export default function Hero() {
  return (
    <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={asset('hero.mp4')}
        autoPlay
        muted
        loop
        playsInline
        poster={asset('images/pool-main-1.jpeg')}
      />
      {/* Karanlık overlay: video daha görünür olsun diye hafifletildi */}
      <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/45 via-ocean-900/35 to-ocean-950/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 text-center text-white sm:px-6">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
          <Sparkles size={16} className="text-aqua-300" />
          2008&apos;den beri Ankara&apos;da yüzme eğitimi
        </p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Güvenli ve Profesyonel{' '}
          <span className="bg-gradient-to-r from-aqua-300 to-cyan-200 bg-clip-text text-transparent">
            Yüzme Eğitimi
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
          Çocuklar ve yetişkinler için Ankara&apos;nın nezih havuzlarında uzman eğitmenlerle yüzme
          dersleri
        </p>
        <div className="mt-9 flex justify-center">
          <a
            href={waLink('Merhaba, yüzme dersleri hakkında bilgi almak ve kayıt olmak istiyorum.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full !bg-emerald-500/85 !shadow-md !shadow-emerald-500/20 hover:!bg-emerald-600/90 sm:w-auto"
          >
            <MessageCircle size={20} />
            Hemen Kayıt & Bilgi Al
          </a>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-white/80">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck size={17} className="text-aqua-300" /> Uzman eğitmen kadrosu
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck size={17} className="text-aqua-300" /> 3 şube: Kızılay · Batıkent ·
            Söğütözü
          </span>
          <span className="inline-flex items-center gap-2">
            <ShieldCheck size={17} className="text-aqua-300" /> Lisanslı sporcu altyapısı
          </span>
        </div>
      </div>
    </section>
  )
}
