import {
  Award,
  Baby,
  CalendarCheck,
  CheckCircle2,
  Dumbbell,
  GraduationCap,
  Heart,
  MapPin,
  Medal,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Waves,
  Users,
} from "lucide-react";

export const phone = "0507 612 06 06";
export const whatsappNumber = "905076120606";
export const brand = "Kumsal Yüzme Akademisi";
export const baseUrl = "https://kumsalyuzmeakademisi.com";

export const navItems = [
  ["Hakkımızda", "#hakkimizda"],
  ["Programlarımız", "#programlar"],
  ["Eğitmenlerimiz", "#egitmenler"],
  ["Galeri", "#galeri"],
  ["Yorumlar", "#yorumlar"],
  ["SSS", "#sss"],
  ["İletişim", "#iletisim"],
];

export const stats = [
  ["5000+", "Öğrenci", Users],
  ["10+", "Yıllık Deneyim", Medal],
  ["Uzman", "Eğitmen Kadrosu", GraduationCap],
  ["Yüksek", "Memnuniyet Oranı", Heart],
];

export const programs = [
  {
    title: "Bebek Yüzme",
    icon: Baby,
    text: "Suya güvenli alışma, ebeveyn eşliği ve temel motor gelişim çalışmaları.",
  },
  {
    title: "Çocuk Yüzme",
    icon: Waves,
    text: "Yaşa ve seviyeye göre gruplar, güvenli teknik başlangıç ve düzenli takip.",
  },
  {
    title: "Yetişkin Yüzme",
    icon: Users,
    text: "Başlangıçtan ileri seviyeye, konforlu tempo ve bireysel gelişim planı.",
  },
  {
    title: "Özel Ders",
    icon: Star,
    text: "Hedefe özel bire bir program, esnek saatler ve hızlı teknik ilerleme.",
  },
  {
    title: "Teknik Gelişim Programı",
    icon: Dumbbell,
    text: "Stil analizi, nefes koordinasyonu, dayanıklılık ve verimli yüzme tekniği.",
  },
  {
    title: "Performans Yüzücülüğü",
    icon: Award,
    text: "Yarış hedefi olan sporcular için tempo, drill ve performans odaklı çalışma.",
  },
];

export const reasons = [
  ["Güvenlik Önceliğimiz", "Tüm eğitimler kontrollü, hijyenik ve güvenli havuz ortamında planlanır.", ShieldCheck],
  ["Uzman Kadro", "Alanında deneyimli eğitmenlerle seviyeye uygun profesyonel eğitim.", GraduationCap],
  ["Modern Tesis", "Temiz, düzenli ve premium hissi veren kapalı yüzme ortamı.", Waves],
  ["Kişiye Özel Program", "Her öğrencinin seviyesine ve hedefine göre net gelişim planı.", CalendarCheck],
  ["Başarı Odaklı", "Teknik, özgüven ve süreklilik birlikte takip edilir.", Sparkles],
];

export const trainers = [
  ["Mert Can Yılmaz", "Başantrenör", "12+ yıl deneyim"],
  ["Selin Aksoy", "Çocuk yüzme antrenörü", "8+ yıl deneyim"],
  ["Emre Kaya", "Performans antrenörü", "7+ yıl deneyim"],
  ["Derya Erdem", "Teknik gelişim uzmanı", "6+ yıl deneyim"],
];

export const testimonials = [
  {
    name: "Ayşe K.",
    role: "Veli",
    text: "Oğlumun su korkusu kısa sürede azaldı. Eğitmenlerin ilgisi ve takip sistemi çok güven veriyor.",
  },
  {
    name: "Mehmet T.",
    role: "Öğrenci",
    text: "Yetişkin programında tekniğimi geliştirdim. Program ciddi, düzenli ve çok profesyonel.",
  },
  {
    name: "Zeynep A.",
    role: "Öğrenci",
    text: "Ders saatleri esnek, tesis temiz ve iletişim çok iyi. Kesinlikle tavsiye ederim.",
  },
];

export const faqs = [
  ["Yüzme bilmeyen biri kursa katılabilir mi?", "Evet. Başlangıç seviyesindeki öğrenciler için güvenli suya alışma ve temel teknik programı uygulanır."],
  ["Dersler ne kadar sürüyor?", "Program türüne göre değişir; grup ve özel derslerde süre, seviye ve hedefe göre planlanır."],
  ["Kaç kişilik gruplarla eğitim veriliyor?", "Çocuk ve yetişkin grupları kontrollü kontenjanla açılır; her öğrenci yakından takip edilir."],
  ["Deneme dersi yapılıyor mu?", "Evet. Uygun takvim için formu doldurabilir veya WhatsApp üzerinden bilgi alabilirsiniz."],
  ["Kayıt için hangi bilgiler gerekli?", "Ad soyad, telefon, yaş grubu, yüzme seviyesi ve tercih edilen program bilgisi yeterlidir."],
];

export const localPages = {
  "/kizilay-yuzme-kursu": {
    slug: "kizilay-yuzme-kursu",
    location: "Kızılay",
    h1: "Kızılay Yüzme Kursu",
    title: "Kızılay Yüzme Kursu | Kumsal Yüzme Akademisi",
    description: "Kızılay'da çocuklar ve yetişkinler için güvenli, hijyenik ve uzman eğitmenlerle profesyonel yüzme kursu.",
    address: "Kızılay, Ziya Gökalp Cd. No:58, 06420 Çankaya / Ankara",
    mapQuery: "Kızılay, Çankaya, Ankara",
    lead: "Kızılay'ın merkezinde güvenli ve profesyonel yüzme eğitimi.",
    bullets: ["Metro ve toplu taşıma akslarına yakın konum", "Çocuk ve yetişkin seviyelerine uygun program", "Hijyenik kapalı havuz standardı"],
  },
  "/batikent-yuzme-kursu": {
    slug: "batikent-yuzme-kursu",
    location: "Batıkent",
    h1: "Batıkent Yüzme Kursu",
    title: "Batıkent Yüzme Kursu | Kumsal Yüzme Akademisi",
    description: "Batıkent'te çocuk, yetişkin, özel ders ve teknik gelişim programlarıyla profesyonel yüzme eğitimi.",
    address: "Batıkent, Yenimahalle / Ankara",
    mapQuery: "Batıkent, Yenimahalle, Ankara",
    lead: "Batıkent çevresinde seviyeye göre planlanan, güvenli ve takipli yüzme eğitimi.",
    bullets: ["Aileler için kolay ulaşım", "Seviye belirleme ve gelişim takibi", "Esnek grup ve özel ders seçenekleri"],
  },
  "/sogutozu-yuzme-kursu": {
    slug: "sogutozu-yuzme-kursu",
    location: "Söğütözü",
    h1: "Söğütözü Yüzme Kursu",
    title: "Söğütözü Yüzme Kursu | Kumsal Yüzme Akademisi",
    description: "Söğütözü'nde premium yüzme kursu: uzman eğitmenler, güvenli havuz ortamı, çocuk ve yetişkin programları.",
    address: "Söğütözü, Çankaya / Ankara",
    mapQuery: "Söğütözü, Çankaya, Ankara",
    lead: "Söğütözü ve çevresinde modern, güven veren ve hedef odaklı yüzme dersleri.",
    bullets: ["Kurumsal lokasyonlara yakın erişim", "Yetişkin ve çocuklara özel ders planları", "Profesyonel eğitmen kadrosu"],
  },
};

export const localPageLinks = Object.values(localPages).map((page) => ({
  label: `${page.location} Yüzme Kursu`,
  href: `/${page.slug}`,
  icon: MapPin,
}));

export function whatsappUrl(message = "Merhaba, Kumsal Yüzme Akademisi hakkında bilgi almak istiyorum.") {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function saveLead(payload) {
  const leads = JSON.parse(localStorage.getItem("kumsal_leads") || "[]");
  const lead = { ...payload, createdAt: new Date().toISOString(), sourcePath: window.location.pathname };
  localStorage.setItem("kumsal_leads", JSON.stringify([lead, ...leads].slice(0, 100)));
  return lead;
}

export const IconCheck = CheckCircle2;
export const IconMessage = MessageCircle;
