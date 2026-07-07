import { Medal, Waves } from 'lucide-react'
import { asset, trainers } from '../data'

export default function Trainers() {
  return (
    <section id="egitmenler" className="bg-ocean-950/40 py-20 backdrop-blur-[2px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-aqua-300">
            Eğitmenlerimiz
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Uzman ve güler yüzlü antrenör kadromuz
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Her öğrencimizin gelişimini yakından takip eden, alanında deneyimli hocalarımızla
            tanışın.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {trainers.map((trainer, index) => (
            <article
              key={trainer.name}
              className={`overflow-hidden rounded-2xl bg-white shadow-xl shadow-ocean-950/30 transition hover:-translate-y-1 ${
                index === 0 ? 'ring-4 ring-coral-400 sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative h-64 overflow-hidden bg-aqua-100">
                {trainer.image ? (
                  <img
                    src={asset(trainer.image)}
                    alt={trainer.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-ocean-700 via-ocean-800 to-ocean-900 text-white">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-4xl font-extrabold text-aqua-300">
                      {trainer.name.charAt(0)}
                    </span>
                    <Waves size={22} className="text-aqua-300/70" />
                  </div>
                )}
                {index === 0 && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-coral-500 px-3 py-1 text-xs font-extrabold text-white shadow-lg">
                    <Medal size={13} /> Baş Antrenör
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-extrabold text-ocean-900">{trainer.name}</h3>
                <p className="text-sm font-bold text-aqua-600">{trainer.role}</p>
                <p className="mt-2 text-xs font-semibold text-slate-700">{trainer.experience}</p>
                <p className="mt-2 text-sm leading-snug text-slate-800">
                  <span className="font-bold text-ocean-800">Uzmanlık: </span>
                  {trainer.expertise}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
