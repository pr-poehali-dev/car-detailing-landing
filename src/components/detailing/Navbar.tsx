import { useState } from "react";
import Icon from "@/components/ui/icon";
import { LION_LOGO, NAV_LINKS, scrollTo } from "./data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.0) 100%)" }}
      >
        <div className="flex items-center gap-3" style={{ fontFamily: "'Cormorant', serif", fontSize: "22px", fontWeight: 300, letterSpacing: "0.25em", color: "#C9A84C" }}>
          <img src={LION_LOGO} alt="Золотой Лев" style={{ width: "36px", height: "36px", objectFit: "cover", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.4)" }} />
          ЗОЛОТОЙ ЛЕВ
        </div>

        <ul className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <button
                onClick={() => handleNav(l.href)}
                style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(237,232,222,0.65)", background: "none", border: "none", cursor: "pointer", transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(237,232,222,0.65)")}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => handleNav("#contacts")} className="hidden md:block btn-gold px-5 py-2 text-xs tracking-[0.15em] rounded-sm">
          Записаться
        </button>

        <button className="md:hidden" style={{ color: "#C9A84C", background: "none", border: "none", cursor: "pointer" }} onClick={() => setMobileOpen(!mobileOpen)}>
          <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8" style={{ background: "rgba(10,10,10,0.98)" }}>
          {NAV_LINKS.map(l => (
            <button key={l.href} onClick={() => handleNav(l.href)}
              style={{ fontFamily: "'Cormorant', serif", fontSize: "30px", fontWeight: 300, letterSpacing: "0.2em", color: "rgba(237,232,222,0.8)", background: "none", border: "none", cursor: "pointer" }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => handleNav("#contacts")} className="btn-gold px-8 py-3 text-sm tracking-[0.15em] mt-4 rounded-sm">
            Записаться
          </button>
        </div>
      )}
    </>
  );
}
