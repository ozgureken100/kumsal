import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { brand, localPageLinks, navItems, phone, whatsappUrl } from "../data/siteData";

export function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label={brand}>
        <img
          src="/logo.png"
          alt={brand}
          width="184"
          height="48"
          onError={(event) => {
            event.currentTarget.src = "/logo-fallback.svg";
          }}
        />
      </a>

      <nav className={open ? "nav is-open" : "nav"} aria-label="Ana menü">
        {navItems.map(([label, href]) => (
          <a href={href} key={label} onClick={close}>
            {label}
          </a>
        ))}
        <div className="nav-group">
          {localPageLinks.map((item) => (
            <a href={item.href} key={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="header-actions">
        <a className="phone-link" href={`tel:${phone.replaceAll(" ", "")}`}>
          <Phone size={18} aria-hidden="true" />
          {phone}
        </a>
        <a className="btn btn-orange btn-small" href={whatsappUrl("Ücretsiz deneme dersi için kayıt olmak istiyorum.")}>
          Ücretsiz Kayıt
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
