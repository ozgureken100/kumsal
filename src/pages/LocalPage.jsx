import { ChevronRight, MessageCircle, Star } from "lucide-react";
import { Header } from "../components/Header";
import { LeadForm } from "../components/LeadForm";
import { Seo } from "../components/Seo";
import { faqs, IconCheck, localPageLinks, testimonials, whatsappUrl } from "../data/siteData";

export function LocalPage({ page }) {
  const path = `/${page.slug}`;

  return (
    <>
      <Seo title={page.title} description={page.description} path={path} localPage={page} />
      <Header />
      <main>
        <section className="local-hero">
          <picture>
            <source srcSet="/assets/local-pool.webp" type="image/webp" />
            <img src="/assets/local-pool.jpg" alt={`${page.h1} güvenli havuz ortamı`} />
          </picture>
          <div className="local-hero-overlay" />
          <div className="local-hero-content">
            <h1>{page.h1}</h1>
            <p>{page.lead}</p>
            <div className="local-hero-points">
              <span>Uzman Antrenörler</span>
              <span>Hijyenik Kapalı Havuz</span>
              <span>Seviye Takibi</span>
            </div>
            <div className="hero-actions">
              <a className="btn btn-orange" href={whatsappUrl(`${page.location} yüzme kursu için bilgi almak istiyorum.`)} target="_blank" rel="noreferrer">
                <MessageCircle size={20} /> WhatsApp ile İletişime Geç
              </a>
              <a className="btn btn-ghost light" href="#kayit">Kayıt Formu</a>
            </div>
          </div>
        </section>

        <section className="section local-content" id="kayit">
          <div className="section-copy">
            <h2>{page.location}’da Yüzme Kursu</h2>
            <h3>Neden Kumsal Yüzme Akademisi?</h3>
            <p>
              {page.location} bölgesinde güvenli, düzenli ve hedef odaklı yüzme eğitimi arayan
              aileler ve yetişkinler için seviyeye göre planlanan programlar sunuyoruz. Her
              öğrencinin gelişimi takip edilir, eğitim süreci net ve sürdürülebilir tutulur.
            </p>
            <ul className="check-list">
              {page.bullets.map((item) => (
                <li key={item}><IconCheck size={20} /> {item}</li>
              ))}
              <li><IconCheck size={20} /> Ücretsiz deneme dersi ve kayıt danışmanlığı</li>
            </ul>
          </div>
          <LeadForm location={page.location} compact />
        </section>

        <section className="map-section">
          <div className="map-copy">
            <h2>{page.location} Lokasyon Bilgisi</h2>
            <p>{page.address}</p>
            <a href={whatsappUrl(`${page.location} lokasyonu için randevu almak istiyorum.`)} target="_blank" rel="noreferrer">
              WhatsApp ile yol ve randevu bilgisi al <ChevronRight size={16} />
            </a>
          </div>
          <iframe
            title={`${page.location} Google Maps`}
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(page.mapQuery)}&output=embed`}
          />
        </section>

        <section className="section local-proof">
          <div>
            <h2>{page.location} Öğrenci Yorumları</h2>
            <div className="local-quotes">
              {testimonials.map((item) => (
                <article key={item.name}>
                  <div className="stars"><Star /><Star /><Star /><Star /><Star /></div>
                  <p>{item.text}</p>
                  <strong>{item.name}</strong>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h2>{page.location} Sık Sorulan Sorular</h2>
            <div className="faq-list">
              {faqs.slice(0, 5).map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="region-links">
          <h2>Diğer Kurs Bölgelerimiz</h2>
          <div>
            {localPageLinks.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </div>
        </section>
      </main>
      <a className="whatsapp-float" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="WhatsApp ile bilgi al">
        <MessageCircle size={26} />
      </a>
    </>
  );
}
