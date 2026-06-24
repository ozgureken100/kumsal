import { useState } from "react";
import { saveLead } from "../data/siteData";

const emptyForm = {
  name: "",
  phone: "",
  student: "",
  age: "",
  program: "Çocuk Yüzme",
  message: "",
};

export function LeadForm({ location = "Genel", compact = false }) {
  const [form, setForm] = useState({ ...emptyForm, location });
  const [saved, setSaved] = useState(null);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submit(event) {
    event.preventDefault();
    const lead = saveLead(form);
    setSaved(lead);
    setForm({ ...emptyForm, location });
  }

  return (
    <form className={compact ? "lead-form compact" : "lead-form"} onSubmit={submit}>
      <div className="form-title">
        <h3>Ücretsiz Kayıt Formu</h3>
        <p>Sizi arayalım</p>
      </div>
      <div className="form-grid">
        <label>
          <span>Ad Soyad</span>
          <input name="name" value={form.name} onChange={update} required autoComplete="name" />
        </label>
        <label>
          <span>Telefon</span>
          <input name="phone" value={form.phone} onChange={update} required inputMode="tel" autoComplete="tel" />
        </label>
        <label>
          <span>Öğrenci Adı</span>
          <input name="student" value={form.student} onChange={update} />
        </label>
        <label>
          <span>Yaş</span>
          <input name="age" value={form.age} onChange={update} inputMode="numeric" />
        </label>
        <label>
          <span>Program</span>
          <select name="program" value={form.program} onChange={update}>
            <option>Bebek Yüzme</option>
            <option>Çocuk Yüzme</option>
            <option>Yetişkin Yüzme</option>
            <option>Özel Ders</option>
            <option>Teknik Gelişim Programı</option>
            <option>Performans Yüzücülüğü</option>
          </select>
        </label>
        <label>
          <span>Lokasyon</span>
          <select name="location" value={form.location} onChange={update}>
            <option>Genel</option>
            <option>Kızılay</option>
            <option>Batıkent</option>
            <option>Söğütözü</option>
          </select>
        </label>
        <label className="wide">
          <span>Mesajınız</span>
          <textarea name="message" value={form.message} onChange={update} rows="4" />
        </label>
      </div>
      <button className="btn btn-orange full" type="submit">
        Ücretsiz Kayıt Oluştur
      </button>
      <p className="privacy">Bilgileriniz yerel kayıt alanına alınır ve yönetim paneli entegrasyonuna hazırdır.</p>
      {saved ? <p className="success">Kaydınız alındı. En kısa sürede sizinle iletişime geçeceğiz.</p> : null}
    </form>
  );
}
