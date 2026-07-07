export const PHONE_DISPLAY = '0542 553 22 09'
export const PHONE_TEL = 'tel:+905425532209'
export const WHATSAPP_URL = 'https://wa.me/905425532209'
export const INSTAGRAM_URL = 'https://www.instagram.com/kumsalyuzmeakademisi/'
export const INSTAGRAM_HANDLE = '@kumsalyuzmeakademisi'

export function waLink(message: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}

// public/ klasöründeki dosyalara BASE_URL'e göre yol üretir; GitHub Pages gibi
// alt yoldan (ör. /kumsal/) yayınlarda da, kök yoldan (Netlify) yayınlarda da doğru çalışır.
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

/* ---------- Carousel ---------- */
export interface CarouselItem {
  src: string
  caption: string
}

export const carouselItems: CarouselItem[] = [
  { src: 'images/pool-main-1.jpeg', caption: 'Havuzdan kareler' },
  { src: 'images/pool-main-2.jpeg', caption: 'Eğitim havuzu' },
  { src: 'images/class-group-1.jpeg', caption: 'Grup dersi' },
  { src: 'images/class-group-2.jpeg', caption: 'Çocuk grupları' },
  { src: 'images/kurs-programi.jpeg', caption: 'Kurs duyuruları' },
  { src: 'images/ozel-ders.jpeg', caption: 'Özel ders' },
  { src: 'images/trainer-action.jpeg', caption: 'Ders anı' },
  { src: 'images/competition-2.jpeg', caption: 'Performans' },
]

/* ---------- Programlar ---------- */
export interface Program {
  id: string
  title: string
  image: string
  description: string
  age: string
  duration: string
  features: string[]
}

export const programs: Program[] = [
  {
    id: 'cocuk-yuzme',
    title: 'Çocuk Yüzme',
    image: 'images/class-group-1.jpeg',
    description:
      '4-14 yaş arası çocuklar için seviyelerine göre ayrılmış küçük gruplarda temel yüzme ve stil eğitimi.',
    age: '4 – 14 yaş',
    duration: '60 dk / ders',
    features: ['4-6 kişilik küçük gruplar', 'Seviyeye göre sınıflar', 'Su güvenliği eğitimi'],
  },
  {
    id: 'yetiskin-yuzme',
    title: 'Yetişkin Yüzme',
    image: 'images/pool-main-1.jpeg',
    description:
      'Sıfırdan başlayanlar ve tekniğini geliştirmek isteyen yetişkinler için sabırlı ve planlı eğitim.',
    age: '15 yaş ve üzeri',
    duration: '60 dk / ders',
    features: ['Su korkusuna özel yaklaşım', 'Kadınlara özel gruplar', 'Esnek ders saatleri'],
  },
  {
    id: 'ozel-ders',
    title: 'Özel Ders',
    image: 'images/ozel-ders.jpeg',
    description:
      'Birebir ilgi ve kişiye özel programla en hızlı gelişim. Her yaş ve seviye için uygundur.',
    age: 'Her yaş',
    duration: '45-60 dk / ders',
    features: ['Birebir eğitmen ilgisi', 'Kişiye özel program', 'Hızlı ve kalıcı sonuç'],
  },
  {
    id: 'teknik-gelisim',
    title: 'Teknik Gelişim',
    image: 'images/trainer-action.jpeg',
    description:
      'Yüzme bilen ama stillerini geliştirmek isteyenler için serbest, sırt, kurbağalama ve kelebek teknik dersleri.',
    age: '7 yaş ve üzeri',
    duration: '60 dk / ders',
    features: ['4 stil teknik analizi', 'Video destekli geri bildirim', 'Kondisyon geliştirme'],
  },
  {
    id: 'performans',
    title: 'Performans Yüzücülüğü',
    image: 'images/competition-2.jpeg',
    description:
      'Lisanslı sporcu altyapısı: müsabakalara hazırlık, antrenman programı ve yarış tecrübesi.',
    age: '8 – 18 yaş',
    duration: 'Haftalık antrenman programı',
    features: ['Kulüp lisansı imkânı', 'Resmi müsabakalara katılım', 'Performans takip sistemi'],
  },
]

/* ---------- Eğitmenler ---------- */
export interface Trainer {
  name: string
  role: string
  experience: string
  expertise: string
  image: string | null
}

export const trainers: Trainer[] = [
  {
    name: 'Güneri Hoca',
    role: 'Kurucu & Baş Antrenör',
    experience: "2008'den beri yüzme eğitiminde",
    expertise: 'Temel yüzme eğitimi, su korkusu ile çalışma, performans antrenörlüğü',
    image: 'images/trainer-guneri.jpeg',
  },
  {
    name: 'Asya Hoca',
    role: 'Yüzme Antrenörü',
    experience: 'Çocuk ve yetişkin gruplarında deneyimli',
    expertise: 'Çocuk grupları, temel teknik eğitimi',
    image: 'images/trainer-asya.jpeg',
  },
  {
    name: 'Sıla Hoca',
    role: 'Yüzme Antrenörü',
    experience: 'Çocuk yüzme ve kadınlara özel derslerde deneyimli',
    expertise: 'Çocuk grupları, kadınlara özel dersler',
    image: 'images/trainer-sila.jpeg',
  },
  {
    name: 'Rabia Hoca',
    role: 'Yüzme Antrenörü',
    experience: 'Başlangıç seviyesi gruplarında deneyimli',
    expertise: 'Çocuk grupları, başlangıç seviyesi eğitimi',
    image: 'images/trainer-rabia.jpeg',
  },
  {
    name: 'Onuralp Hoca',
    role: 'Yüzme Antrenörü',
    experience: 'Performans grubu antrenörlüğünde deneyimli',
    expertise: 'Teknik gelişim, lisanslı sporcu altyapısı',
    image: 'images/trainer-onuralp.jpeg',
  },
]

/* ---------- Galeri ---------- */
export type GalleryCategory = 'Çocuk' | 'Tesis' | 'Eğitim'

export interface GalleryItem {
  src: string
  alt: string
  category: GalleryCategory
}

export const galleryItems: GalleryItem[] = [
  { src: 'images/pool-main-1.jpeg', alt: 'Ana havuz', category: 'Tesis' },
  { src: 'images/pool-main-2.jpeg', alt: 'Eğitim havuzu', category: 'Tesis' },
  { src: 'images/locker-room.jpeg', alt: 'Soyunma odaları', category: 'Tesis' },
  { src: 'images/shower.jpeg', alt: 'Duş alanları', category: 'Tesis' },
  { src: 'images/ankara-genel.jpeg', alt: 'Tesisten genel görünüm', category: 'Tesis' },
  { src: 'images/class-group-1.jpeg', alt: 'Çocuk grup dersi', category: 'Çocuk' },
  { src: 'images/class-group-2.jpeg', alt: 'Grup dersinden bir kare', category: 'Çocuk' },
  { src: 'images/neden-kumsal.jpeg', alt: 'Kumsal yüzücüleri', category: 'Çocuk' },
  { src: 'images/ozel-ders.jpeg', alt: 'Birebir özel ders', category: 'Eğitim' },
  { src: 'images/trainer-action.jpeg', alt: 'Ders anı', category: 'Eğitim' },
  { src: 'images/competition-1.jpeg', alt: 'Yarışma günü', category: 'Eğitim' },
  { src: 'images/competition-2.jpeg', alt: 'Müsabaka heyecanı', category: 'Eğitim' },
  { src: 'images/competition-3.jpeg', alt: 'Performans grubumuz', category: 'Eğitim' },
  { src: 'images/club-flag-1.jpeg', alt: 'Kulüp ruhu', category: 'Eğitim' },
  { src: 'images/club-flag-2.jpeg', alt: 'Takımımız', category: 'Eğitim' },
]

/* ---------- SSS ---------- */
export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Yaş sınırı var mı? Kaç yaşından itibaren başlanabilir?',
    answer:
      'Çocuk gruplarımız 4 yaşından itibaren başlar, yetişkin dersleri ise 15 yaş ve üzeri içindir. Yüzme öğrenmek için üst yaş sınırı yoktur.',
  },
  {
    question: 'Su korkum var, yine de öğrenebilir miyim?',
    answer:
      'Kesinlikle. Su korkusu en sık karşılaştığımız durumdur. Eğitmenlerimiz suya alışma aşamasını aceleye getirmeden, güven temelli bir yaklaşımla çalışır; kısa sürede suyla dost olursunuz.',
  },
  {
    question: 'Havuz hijyeni nasıl sağlanıyor?',
    answer:
      'Ders verdiğimiz havuzlar düzenli su analizi yapılan, filtrasyon ve klor değerleri sürekli takip edilen kurumsal tesislerdir. Duş ve bone kuralları tavizsiz uygulanır.',
  },
  {
    question: 'Dersler ne kadar sürüyor?',
    answer:
      'Grup dersleri 60 dakika, özel dersler 45-60 dakikadır. Programlar haftada 1 veya 2 gün olacak şekilde planlanır.',
  },
  {
    question: 'Hangi şubeyi seçmeliyim?',
    answer:
      'Size en yakın şubeyi seçebilirsiniz: Kızılay (TED Üniversitesi Havuzu), Batıkent (Ankara Teknoloji Koleji Havuzu) ve Söğütözü (TOBB ETÜ Havuzu). Ders saatleri şubelere göre farklılık gösterir; telefonla en uygun seçeneği birlikte belirleriz.',
  },
  {
    question: 'Özel ders nasıl işliyor?',
    answer:
      'Özel derslerde eğitmen yalnızca sizinle ilgilenir. Seviyenize ve hedefinize göre kişisel program hazırlanır. Gün ve saat, sizin uygunluğunuza göre esnek planlanır.',
  },
  {
    question: 'Kayıt süreci nasıl işliyor?',
    answer:
      'Telefon veya WhatsApp ile ulaşın ya da sitedeki formu doldurun. Seviyenizi birlikte değerlendirip size uygun grup ve programla kaydınızı tamamlayalım.',
  },
]

/* ---------- Şubeler ---------- */
export interface Branch {
  slug: string
  name: string
  title: string
  pool: string
  address: string
  rating: string
  ratingDetail: string
  description: string
  image: string
  mapQuery: string
  schedule: { label: string; hours: string[] }[]
  faq: FaqItem[]
  seo: BranchSeo
}

/* Şube sayfası alt tanıtım yazısı (SEO içeriği) */
export interface SeoSection {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  after?: string
}

export interface BranchSeo {
  title: string
  intro: string[]
  sections: SeoSection[]
  keywords: string[]
  outro: string
}

export const branches: Branch[] = [
  {
    slug: 'kizilay-yuzme-kursu',
    name: 'Kızılay',
    title: 'Kızılay Yüzme Kursu',
    pool: 'TED Üniversitesi Havuzu',
    address: 'TED Üniversitesi Yüzme Havuzu, Kızılay / Ankara',
    rating: '5,0 / 5',
    ratingDetail: 'Harita puanı',
    description:
      "Şehrin tam merkezinde, TED Üniversitesi'nin modern yüzme havuzunda çocuk, kadın ve yetişkinlere yönelik yüzme dersleri veriyoruz. Ulaşımı en kolay şubemizdir; Kızılay metro ve otobüs hatlarına yürüme mesafesindedir.",
    image: 'images/kizilay-afis.jpeg',
    mapQuery: 'TED Üniversitesi, Kızılay, Ankara',
    schedule: [
      { label: 'Hafta içi (Çarşamba - Cuma)', hours: ['18:00 - 19:00'] },
      { label: 'Hafta sonu (Cumartesi - Pazar)', hours: ['12:00 - 13:00', '14:00 - 15:00'] },
    ],
    faq: [
      {
        question: 'Kızılay şubesine toplu taşımayla nasıl ulaşırım?',
        answer:
          'TED Üniversitesi Havuzu, Kızılay metro istasyonuna ve ana otobüs hatlarına yürüme mesafesindedir. Kolej metro durağı da yakındır.',
      },
      {
        question: 'Bu şubede hangi programlar var?',
        answer:
          'Çocuk grupları, yetişkin dersleri, kadınlara özel gruplar ve birebir özel dersler Kızılay şubemizde verilmektedir.',
      },
      {
        question: 'Veliler dersi izleyebiliyor mu?',
        answer:
          'Tesisin seyir alanından ilk derslerde çocuğunuzu izleyebilirsiniz; adaptasyon sonrası eğitmenlerimiz düzenli gelişim bilgisi paylaşır.',
      },
    ],
    seo: {
      title: 'Kızılay Yüzme Kursu | Kumsal Yüzme Akademisi',
      intro: [
        "Ankara'da profesyonel yüzme eğitimi almak isteyenler için Kumsal Yüzme Akademisi Kızılay Şubesi, TED Üniversitesi Havuzu'nda çocuklar ve yetişkinler için kaliteli yüzme eğitimleri sunmaktadır.",
        '2008 yılından bu yana yüzme eğitimi veren kulübümüz, yüzmeyi hiç bilmeyen öğrencilerden lisanslı sporcu adaylarına kadar her seviyede eğitim vermektedir. Alanında uzman antrenör kadromuz ile güvenli, disiplinli ve öğrenci odaklı bir eğitim anlayışı benimsiyoruz.',
      ],
      sections: [
        {
          heading: 'Kızılay Yüzme Kursu Programlarımız',
        },
        {
          heading: 'Çocuk Yüzme Kursu (5-13 Yaş)',
          paragraphs: ['Çocuklarımız için hazırlanan grup derslerinde;'],
          bullets: [
            'Temel yüzme eğitimi',
            'Su korkusunu yenme çalışmaları',
            'Doğru nefes teknikleri',
            'Serbest ve sırtüstü yüzme teknikleri',
            'Koordinasyon ve dayanıklılık çalışmaları',
          ],
          after: 'uygulanmaktadır.',
        },
        {
          heading: 'Kadın Grup Yüzme Dersleri',
          paragraphs: [
            'Kadınlara özel grup derslerimizde öğrencilerimiz güvenli ve konforlu bir ortamda yüzme öğrenme fırsatı bulmaktadır.',
          ],
        },
        {
          heading: 'Birebir Özel Yüzme Dersleri',
          paragraphs: ['Kişiye özel hazırlanan programlarla;'],
          bullets: [
            'Hızlı öğrenme',
            'Teknik geliştirme',
            'Performans artırma',
            'Su korkusunu yenme',
          ],
          after: 'hedeflenmektedir.',
        },
        {
          heading: 'Lisanslı Sporcu Yetiştirme Programı',
          paragraphs: [
            'Yüzmeyi ileri seviyeye taşımak isteyen öğrencilerimiz için lisanslı sporcu hazırlık programları uygulanmaktadır.',
          ],
        },
        {
          heading: 'Neden Kumsal Yüzme Akademisi?',
          bullets: [
            "2008'den beri yüzme eğitimi tecrübesi",
            'Uzman ve deneyimli antrenör kadrosu',
            "TED Üniversitesi Havuzu'nda eğitim",
            'Çocuk ve yetişkin grupları',
            'Birebir özel ders imkanı',
            'Lisanslı sporcu yetiştirme programları',
            'Güvenli ve disiplinli eğitim ortamı',
          ],
        },
        {
          heading: "TED Üniversitesi Havuzu'nda Profesyonel Eğitim",
          paragraphs: [
            "Kızılay'da bulunan TED Üniversitesi Havuzu, merkezi konumu ve modern tesis yapısıyla Ankara'da yüzme eğitimi almak isteyenler için ideal bir ortam sunmaktadır.",
            'Kumsal Yüzme Akademisi olarak öğrencilerimize hem yüzmeyi öğretmeyi hem de sporu yaşamlarının bir parçası haline getirmeyi hedefliyoruz.',
          ],
        },
      ],
      keywords: [
        'Ankara Yüzme Kursu',
        'Kızılay Yüzme Kursu',
        'TED Üniversitesi Yüzme Kursu',
        'Çocuk Yüzme Kursu Ankara',
        'Kadın Yüzme Kursu Ankara',
        'Özel Yüzme Dersi Ankara',
        'Yetişkin Yüzme Kursu Ankara',
        'Lisanslı Sporcu Eğitimi Ankara',
      ],
      outro:
        'Kızılay şubemiz hakkında detaylı bilgi almak ve kayıt oluşturmak için bizimle iletişime geçebilirsiniz.',
    },
  },
  {
    slug: 'batikent-yuzme-kursu',
    name: 'Batıkent',
    title: 'Batıkent Yüzme Kursu',
    pool: 'Ankara Teknoloji Koleji Havuzu',
    address: 'Ankara Teknoloji Koleji Havuzu, Batıkent / Ankara',
    rating: '4,9 / 5',
    ratingDetail: 'Şube puanı',
    description:
      "Batıkent'te Ankara Teknoloji Koleji'nin temiz ve güvenli havuzunda 4-14 yaş çocuk grupları başta olmak üzere her seviyeye yüzme eğitimi veriyoruz. 4-6 kişilik küçük gruplarla yüksek verimli dersler yapıyoruz.",
    image: 'images/batikent-afis.jpeg',
    mapQuery: 'Ankara Teknoloji Koleji, Batıkent, Ankara',
    schedule: [
      { label: 'Hafta içi (Salı - Perşembe)', hours: ['18:00 - 19:00', '19:00 - 20:00'] },
      { label: 'Hafta sonu (Cumartesi - Pazar)', hours: ['10:00 - 11:00'] },
    ],
    faq: [
      {
        question: 'Batıkent şubesinde hangi yaş grupları var?',
        answer:
          '4-14 yaş çocuk grupları ağırlıklı olmak üzere yetişkin dersleri ve birebir özel dersler de verilmektedir.',
      },
      {
        question: 'Gruplar kaç kişilik?',
        answer:
          'Çocuk gruplarımız 4-6 kişiliktir; böylece her öğrenci eğitmeninden yeterli ilgiyi görür.',
      },
      {
        question: 'Otopark imkânı var mı?',
        answer: 'Ankara Teknoloji Koleji tesisinde veliler için araç park alanı mevcuttur.',
      },
    ],
    seo: {
      title: 'Batıkent Yüzme Kursu | Kumsal Yüzme Akademisi',
      intro: [
        "Ankara Batıkent'te profesyonel yüzme eğitimi almak isteyenler için Kumsal Yüzme Akademisi Batıkent Şubesi, Ankara Teknoloji Koleji Havuzu'nda çocuklar ve yetişkinler için kaliteli yüzme eğitimleri sunmaktadır.",
        '2008 yılından bu yana yüzme eğitimi veren kulübümüz, yüzmeyi yeni öğrenen öğrencilerden lisanslı sporcu adaylarına kadar her seviyede eğitim vermektedir. Uzman antrenör kadromuz ile güvenli, disiplinli ve öğrenci odaklı bir eğitim anlayışı sunuyoruz.',
      ],
      sections: [
        {
          heading: 'Batıkent Yüzme Kursu Programlarımız',
        },
        {
          heading: 'Çocuk Yüzme Kursu (5-13 Yaş)',
          paragraphs: ['Çocuk grup derslerimizde;'],
          bullets: [
            'Temel yüzme eğitimi',
            'Su korkusunu yenme çalışmaları',
            'Doğru nefes teknikleri',
            'Serbest ve sırtüstü yüzme teknikleri',
            'Koordinasyon ve kondisyon geliştirme',
            'Sporcu altyapı çalışmaları',
          ],
          after: 'uygulanmaktadır.',
        },
        {
          heading: 'Birebir Özel Yüzme Dersleri',
          paragraphs: ['Özel ders programlarımız öğrencinin seviyesine göre planlanmaktadır.'],
          bullets: [
            'Yüzmeye başlangıç',
            'Teknik geliştirme',
            'Su korkusunu yenme',
            'Performans artırma',
            'Yarış hazırlığı',
          ],
          after: 'alanlarında bireysel eğitim verilmektedir.',
        },
        {
          heading: 'Lisanslı Sporcu Yetiştirme Programı',
          paragraphs: [
            'Yüzmeyi ileri seviyeye taşımak isteyen öğrencilerimiz için lisanslı sporcu hazırlık programları uygulanmaktadır. Teknik gelişim, kondisyon çalışmaları ve yarış hazırlıkları uzman antrenörlerimiz tarafından takip edilmektedir.',
          ],
        },
        {
          heading: 'Neden Kumsal Yüzme Akademisi?',
          bullets: [
            "2008'den beri yüzme eğitimi tecrübesi",
            'Uzman ve deneyimli antrenör kadrosu',
            "Ankara Teknoloji Koleji Havuzu'nda eğitim",
            'Çocuk grup dersleri',
            'Birebir özel yüzme dersleri',
            'Lisanslı sporcu yetiştirme programı',
            'Güvenli ve disiplinli eğitim ortamı',
            'Öğrenci seviyesine özel eğitim planlaması',
          ],
        },
        {
          heading: "Ankara Teknoloji Koleji Havuzu'nda Eğitim",
          paragraphs: [
            "Batıkent'te bulunan Ankara Teknoloji Koleji Havuzu, modern yapısı ve güvenli eğitim ortamıyla çocuklar ve yetişkinler için ideal bir yüzme eğitim merkezidir.",
            'Kumsal Yüzme Akademisi olarak amacımız öğrencilerimize yalnızca yüzmeyi öğretmek değil, aynı zamanda su güvenliği, disiplin ve spor kültürü kazandırmaktır.',
          ],
        },
        {
          heading: 'Batıkent Yüzme Kursu Derslerimiz',
        },
        {
          heading: 'Çocuk Grup Dersleri',
          bullets: [
            'Salı & Perşembe 18:00 – 19:00',
            'Salı & Perşembe 19:00 – 20:00',
            'Cumartesi & Pazar 10:00 – 11:00',
          ],
        },
        {
          heading: 'Özel Yüzme Dersleri',
          paragraphs: [
            'Çocuk ve yetişkin öğrenciler için birebir özel ders seçenekleri sunulmaktadır.',
          ],
        },
      ],
      keywords: [
        'Batıkent Yüzme Kursu',
        'Ankara Yüzme Kursu',
        'Batıkent Çocuk Yüzme Kursu',
        'Ankara Teknoloji Koleji Yüzme Kursu',
        'Batıkent Özel Yüzme Dersi',
        'Çocuk Yüzme Kursu Ankara',
        'Lisanslı Sporcu Eğitimi Ankara',
        'Batıkent Yüzme Eğitimi',
        'Yetişkin Yüzme Dersi Ankara',
        'Kumsal Yüzme Akademisi Batıkent',
      ],
      outro:
        'Batıkent şubemiz hakkında detaylı bilgi almak ve kayıt oluşturmak için bizimle iletişime geçebilirsiniz.',
    },
  },
  {
    slug: 'sogutozu-yuzme-kursu',
    name: 'Söğütözü',
    title: 'Söğütözü Yüzme Kursu',
    pool: 'TOBB ETÜ Havuzu',
    address: 'TOBB Üniversitesi Yüzme Havuzu, Söğütözü / Ankara',
    rating: '5,0 / 5',
    ratingDetail: '38 yorum',
    description:
      "Söğütözü'nde TOBB Ekonomi ve Teknoloji Üniversitesi'nin modern yüzme havuzunda çocuk, kadın ve yetişkinlere profesyonel yüzme eğitimi veriyoruz. Lisanslı yüzücü programımızın merkez şubesidir.",
    image: 'images/sogutozu-afis.jpeg',
    mapQuery: 'TOBB ETÜ, Söğütözü, Ankara',
    schedule: [
      { label: 'Ders saatleri', hours: ['Güncel program için lütfen arayınız: 0542 553 22 09'] },
    ],
    faq: [
      {
        question: 'Söğütözü şubesinde lisanslı sporcu programı var mı?',
        answer:
          'Evet, lisanslı yüzücü programımızın merkezi Söğütözü şubemizdir. Kulüp lisansı ile resmi müsabakalara katılım imkânı sunuyoruz.',
      },
      {
        question: 'Bu şube hangi semtlere yakın?',
        answer:
          'Söğütözü, Balgat, Beştepe, Çukurambar ve Bahçelievler bölgelerinden kolay ulaşım sağlanır; Söğütözü metro istasyonu yakındır.',
      },
      {
        question: 'Kadınlara özel ders saati var mı?',
        answer:
          'Evet, kadın yüzme kursu gruplarımız mevcuttur. Güncel saatler için bize WhatsApp üzerinden ulaşabilirsiniz.',
      },
    ],
    seo: {
      title: 'Söğütözü Yüzme Kursu | Kumsal Yüzme Akademisi',
      intro: [
        "Ankara Söğütözü'nde birebir yüzme eğitimi almak isteyenler için Kumsal Yüzme Akademisi, TOBB ETÜ Yüzme Havuzu'nda çocuklar ve yetişkinler için profesyonel özel yüzme dersleri sunmaktadır.",
        '2008 yılından bu yana yüzme eğitimi veren kulübümüz, yüzmeyi yeni öğrenen öğrencilerden performansını geliştirmek isteyen sporculara kadar her seviyede eğitim vermektedir. Deneyimli antrenör kadromuz ile öğrencilerimize güvenli, planlı ve hedef odaklı eğitim programları hazırlıyoruz.',
      ],
      sections: [
        {
          heading: 'Söğütözü Özel Yüzme Dersi Programlarımız',
        },
        {
          heading: 'Çocuklara Özel Yüzme Dersleri',
          paragraphs: ['Çocuk öğrencilerimiz için hazırlanan birebir programlarda;'],
          bullets: [
            'Su korkusunu yenme',
            'Temel yüzme eğitimi',
            'Doğru nefes teknikleri',
            'Serbest ve sırtüstü yüzme eğitimi',
            'Su güvenliği eğitimi',
            'Teknik gelişim çalışmaları',
          ],
          after: 'uygulanmaktadır.',
        },
        {
          heading: 'Yetişkinlere Özel Yüzme Dersleri',
          paragraphs: [
            'Yüzmeyi hiç bilmeyen veya tekniğini geliştirmek isteyen yetişkinler için kişiye özel eğitim programları sunulmaktadır.',
          ],
          bullets: [
            'Sıfırdan yüzme öğrenme',
            'Su korkusunu yenme',
            'Teknik geliştirme',
            'Kondisyon artırma',
            'Performans geliştirme',
          ],
          after: 'hedeflenmektedir.',
        },
        {
          heading: 'Birebir Özel Ders Avantajları',
          paragraphs: [
            'Özel derslerde eğitim programı tamamen öğrencinin seviyesine göre hazırlanır.',
          ],
          bullets: [
            'Hızlı öğrenme süreci',
            'Kişiye özel antrenman planı',
            'Esnek eğitim yaklaşımı',
            'Bireysel takip ve gelişim analizi',
            'Daha yoğun teknik çalışma',
          ],
          after: 'sayesinde öğrencilerimiz daha kısa sürede ilerleme kaydedebilmektedir.',
        },
        {
          heading: 'Lisanslı Sporcu Hazırlık Programı',
          paragraphs: [
            'Yüzmeyi profesyonel seviyeye taşımak isteyen öğrencilerimiz için lisanslı sporcu hazırlık programları uygulanmaktadır. Teknik gelişim, dayanıklılık çalışmaları ve yarış hazırlıkları uzman antrenörlerimiz tarafından takip edilmektedir.',
          ],
        },
        {
          heading: 'Neden Kumsal Yüzme Akademisi?',
          bullets: [
            "2008'den beri yüzme eğitimi tecrübesi",
            'Uzman ve deneyimli antrenör kadrosu',
            "TOBB ETÜ Yüzme Havuzu'nda eğitim",
            'Çocuk ve yetişkinlere özel birebir dersler',
            'Su korkusunu yenme programları',
            'Lisanslı sporcu yetiştirme çalışmaları',
            'Öğrenci seviyesine göre kişisel eğitim planlaması',
            'Güvenli ve profesyonel eğitim ortamı',
          ],
        },
        {
          heading: "TOBB ETÜ Yüzme Havuzu'nda Eğitim",
          paragraphs: [
            "Söğütözü'nde bulunan TOBB ETÜ Yüzme Havuzu, modern tesis yapısı ve merkezi konumuyla Ankara'da özel yüzme dersi almak isteyenler için ideal bir eğitim ortamı sunmaktadır.",
            'Kumsal Yüzme Akademisi olarak amacımız öğrencilerimize yalnızca yüzmeyi öğretmek değil, aynı zamanda su güvenliği, özgüven ve spor kültürü kazandırmaktır.',
          ],
        },
        {
          heading: 'Söğütözü Yüzme Eğitimi Kimler İçin Uygundur?',
          bullets: [
            'Yüzmeyi hiç bilmeyen çocuklar',
            'Yüzmeyi hiç bilmeyen yetişkinler',
            'Su korkusu yaşayan bireyler',
            'Tekniğini geliştirmek isteyen yüzücüler',
            'Lisanslı sporcu olmak isteyen öğrenciler',
            'Yarışlara hazırlanan sporcular',
          ],
        },
      ],
      keywords: [
        'Söğütözü Yüzme Kursu',
        'Söğütözü Özel Yüzme Dersi',
        'TOBB ETÜ Yüzme Havuzu',
        'TOBB ETÜ Yüzme Kursu',
        'Ankara Özel Yüzme Dersi',
        'Ankara Yüzme Kursu',
        'Yetişkin Yüzme Dersi Ankara',
        'Çocuk Yüzme Kursu Ankara',
        'Su Korkusunu Yenme Eğitimi',
        'Lisanslı Sporcu Eğitimi Ankara',
        'Kumsal Yüzme Akademisi Söğütözü',
      ],
      outro:
        'Söğütözü şubemizde çocuklar ve yetişkinler için birebir özel yüzme dersleri verilmektedir. Detaylı bilgi ve kayıt işlemleri için bizimle iletişime geçebilirsiniz.',
    },
  },
]

/* ---------- Yorum temaları ve puanlar ---------- */
export const ratingHighlights = [
  { branch: 'Batıkent Şubesi', score: '4,9 / 5', detail: 'Şube puanı' },
  { branch: 'Söğütözü Profili', score: '5,0 / 5', detail: '38 yorum' },
  { branch: 'Kızılay Şubesi', score: '5,0 / 5', detail: 'Harita puanı' },
]

export const reviewThemes = [
  'Profesyonel ve ilgili eğitmen kadrosu',
  'Kısa sürede gözle görülür yüzme gelişimi',
  'Çocuk ve yetişkin seviyesine uygun ders planı',
  'Temiz havuz ve düzenli tesis deneyimi',
]

export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Kumsal Yüzme Akademisi Ankara')
