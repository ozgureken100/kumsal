import { Award, Droplets, HeartHandshake, MapPin, ShieldCheck } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Güvenlik Önceliği',
    text: 'Cankurtaran gözetiminde dersler, küçük gruplar ve tavizsiz havuz kuralları.',
  },
  {
    icon: Droplets,
    title: 'Hijyenik Tesisler',
    text: 'Düzenli su analizi yapılan, filtrasyonu sürekli izlenen kurumsal üniversite ve kolej havuzları.',
  },
  {
    icon: HeartHandshake,
    title: 'Pedagojik Yaklaşım',
    text: 'Her yaş grubunun gelişim özelliklerine uygun, sabırlı ve güven temelli eğitim modeli.',
  },
  {
    icon: Award,
    title: 'Profesyonel Antrenörlük',
    text: 'Deneyimli antrenör kadrosu ve lisanslı sporcu altyapısına uzanan eğitim sistemi.',
  },
]

export default function About() {
  return (
    <section id="hakkimizda" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">Hakkımızda</span>
            <h2 className="section-title">
              2008&apos;den beri binlerce kişiye yüzme öğretiyoruz
            </h2>
            <p className="mt-6 text-lg leading-relaxed">
              Kumsal Yüzme Akademisi, 2008 yılından bu yana Ankara&apos;da çocuklardan yetişkinlere
              her yaş grubuna yüzme eğitimi veriyor. Amacımız yalnızca yüzme öğretmek değil; suyla
              sağlıklı, güvenli ve ömür boyu sürecek bir bağ kurdurmak.
            </p>
            <p className="mt-4 leading-relaxed">
              Derslerimiz Kızılay (TED Üniversitesi Havuzu), Batıkent (Ankara Teknoloji Koleji
              Havuzu) ve Söğütözü (TOBB ETÜ Havuzu) şubelerimizde, hijyeni düzenli denetlenen nezih
              havuzlarda yapılır. Küçük gruplar ve birebir ilgiyle her öğrencimizin gelişimini
              yakından takip ederiz.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Kızılay', 'Batıkent', 'Söğütözü'].map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full bg-aqua-100 px-4 py-1.5 text-sm font-bold text-aqua-800"
                >
                  <MapPin size={14} /> {b}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card p-6">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-aqua-400 to-aqua-600 p-3 text-white shadow-lg shadow-aqua-500/25">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 font-extrabold text-ocean-900">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-800">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
