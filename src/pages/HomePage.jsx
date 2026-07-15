import {
  Award,
  ChevronRight,
  MessageCircle,
  Move3d,
  Star,
} from "lucide-react";
import { Header } from "../components/Header";
import { LeadForm } from "../components/LeadForm";
import { PoolExperience } from "../components/PoolExperience";
import { Seo } from "../components/Seo";
import {
  brand,
  faqs,
  localPageLinks,
  programs,
  reasons,
  stats,
  testimonials,
  trainers,
  whatsappUrl,
} from "../data/siteData";

export function HomePage() {
  return (
    <>
      <Seo
        title="Kumsal Yüzme Akademisi | Güvenli ve Profesyonel Yüzme Eğitimi"
        description="Kumsal Yüzme Akademisi'nde çocuklar ve yetişkinler için uzman eğitmenlerle yüzme dersleri, özel ders ve performans programları."
      />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <Trainers />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <WhatsAppButton />
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="anasayfa">
      <div className="hero-media">
        <PoolExperience />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-eyebrow">ANKARA'NIN YÜZME AKADEMİSİ</span>
        <h1>Güvenli ve Profesyonel Yüzme Eğitimi</h1>
        <p>Çocuklar ve yetişkinler için uzman eğitmenlerle yüzme dersleri</p>
        <div className="hero-actions">
          <a className="btn btn-orange" href="#iletisim">Ücretsiz Deneme Dersi</a>
          <a className="btn btn-cyan" href="#iletisim">Hemen Kayıt Ol</a>
          <a className="btn btn-ghost" href={whatsappUrl()} target="_blank" rel="noreferrer">
            <MessageCircle size={20} /> WhatsApp ile Bilgi Al
          </a>
        </div>
        <p className="hero-explore-note"><Move3d size={17} /> 3B tesisi keşfetmek için sahneyi sürükleyin.</p>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats-band" aria-label="Kumsal Yüzme Akademisi istatistikleri">
      {stats.map(([value, label, Icon]) => (
        <div className="stat" key={`${value}-${label}`}>
          <Icon size={38} />
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}

function About() {
  return (
    <section className="section two-col" id="hakkimizda">
      <div className="media-frame">
        <picture>
          <source srcSet="/assets/facility.webp" type="image/webp" />
          <img src="/assets/facility.jpg" alt={`${brand} modern kapalı havuz tesisi`} loading="lazy" />
        </picture>
      </div>
      <div className="section-copy">
        <h2>Hakkımızda</h2>
        <p>
          Kumsal Yüzme Akademisi, yüzme eğitiminde güvenliği, kaliteyi ve bireysel gelişimi
          merkeze alan kurumsal bir akademidir. Programlarımız çocuklar, yetişkinler ve
          performans hedefi olan yüzücüler için seviyeye göre planlanır.
        </p>
        <div className="feature-row">
          {["Güvenli Ortam", "Bireysel Yaklaşım", "Sürekli İlerleme", "Kaliteli Eğitim"].map((item) => (
            <span key={item}><Award size={22} /> {item}</span>
          ))}
        </div>
        <a className="btn btn-orange btn-small" href="#programlar">Programları İncele</a>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="section section-soft" id="programlar">
      <div className="section-head">
        <h2>Programlarımız</h2>
        <p>Yaş, seviye ve hedefe göre oluşturulmuş profesyonel yüzme programları.</p>
      </div>
      <div className="card-grid program-grid">
        {programs.map(({ title, text, icon: Icon }) => (
          <article className="info-card" key={title}>
            <Icon size={34} />
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#iletisim">Detaylı Bilgi <ChevronRight size={16} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Trainers() {
  return (
    <section className="section" id="egitmenler">
      <div className="section-head">
        <h2>Eğitmenlerimiz</h2>
        <p>Alanında deneyimli, iletişimi güçlü ve gelişim odaklı eğitmen kadrosu.</p>
      </div>
      <div className="trainer-grid">
        {trainers.map(([name, role, exp], index) => (
          <article className="trainer-card" key={name}>
            <div className="avatar" aria-hidden="true">{name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</div>
            <h3>{name}</h3>
            <p>{role}</p>
            <span>{exp}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    ["/assets/hero-pool.webp", "Modern yüzme havuzu"],
    ["/assets/facility.webp", "Yüzme eğitim ekipmanları"],
    ["/assets/local-pool.webp", "Güvenli kurs ortamı"],
  ];

  return (
    <section className="section gallery" id="galeri">
      <div className="section-head">
        <h2>Galeri</h2>
        <p>Temiz, düzenli ve profesyonel eğitim ortamından seçilmiş görseller.</p>
      </div>
      <div className="gallery-grid">
        {images.map(([src, alt]) => (
          <img key={src} src={src} alt={alt} loading="lazy" />
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section why" id="neden">
      <div className="section-head">
        <h2>Neden Kumsal Yüzme Akademisi?</h2>
      </div>
      <div className="reason-grid">
        {reasons.map(([title, text, Icon]) => (
          <article key={title}>
            <Icon size={36} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section section-soft" id="yorumlar">
      <div className="section-head">
        <h2>Öğrenci ve Veli Yorumları</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="quote-card" key={item.name}>
            <div className="stars" aria-label="5 yıldız"><Star /><Star /><Star /><Star /><Star /></div>
            <p>{item.text}</p>
            <strong>{item.name}</strong>
            <span>{item.role}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section faq-section" id="sss">
      <div className="section-head">
        <h2>Sık Sorulan Sorular</h2>
      </div>
      <div className="faq-list">
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="iletisim">
      <div className="contact-inner">
        <div>
          <h2>İletişim</h2>
          <p>Kayıt, seviye belirleme ve ücretsiz deneme dersi için formu doldurun.</p>
          <div className="local-links">
            {localPageLinks.map(({ label, href, icon: Icon }) => (
              <a href={href} key={href}><Icon size={18} /> {label}</a>
            ))}
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}

function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="WhatsApp ile bilgi al">
      <MessageCircle size={26} />
    </a>
  );
}
