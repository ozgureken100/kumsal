import { Link } from 'react-router-dom'
import { CheckCircle2, Clock, Users } from 'lucide-react'
import { programs } from '../data'

export default function Programs() {
  return (
    <section id="programlar" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Programlarımız</span>
          <h2 className="section-title">Her yaşa ve seviyeye uygun program</h2>
          <p className="mt-4 text-lg">
            Bebek yüzmesinden performans yüzücülüğüne, hedefinize uygun programı birlikte
            belirleyelim.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.id}
              className="card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-950/80 to-transparent p-4 pt-10">
                  <h3 className="text-xl font-extrabold text-white">{program.title}</h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap gap-2 text-xs font-bold">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-aqua-100 px-3 py-1.5 text-aqua-800">
                    <Users size={14} /> {program.age}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ocean-50 px-3 py-1.5 text-ocean-700">
                    <Clock size={14} /> {program.duration}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-800">{program.description}</p>
                <ul className="mt-4 space-y-2">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm font-medium text-slate-800">
                      <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-aqua-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/#kayit"
                  state={{ program: program.title }}
                  className="btn-primary mt-6 w-full !py-2.5 text-sm"
                >
                  Kayıt Ol
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
