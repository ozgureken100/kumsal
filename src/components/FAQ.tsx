import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqItems, type FaqItem } from '../data'

interface FAQProps {
  items?: FaqItem[]
  title?: string
  compact?: boolean
}

export default function FAQ({ items = faqItems, title, compact = false }: FAQProps) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="sss" className={compact ? '' : 'py-20'}>
      <div className={compact ? '' : 'mx-auto max-w-4xl px-4 sm:px-6'}>
        {!compact && (
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Sık Sorulan Sorular</span>
            <h2 className="section-title">{title ?? 'Merak edilenler'}</h2>
          </div>
        )}
        {compact && title && (
          <h2 className="mb-6 text-2xl font-extrabold text-ocean-900">{title}</h2>
        )}

        <div className={`space-y-3 ${compact ? '' : 'mt-12'}`}>
          {items.map((item, index) => {
            const isOpen = open === index
            return (
              <div key={item.question} className="card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-ocean-900">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-aqua-500 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="border-t border-aqua-50 px-6 py-4 leading-relaxed text-slate-800">
                    {item.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
