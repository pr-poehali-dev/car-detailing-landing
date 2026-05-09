import Icon from "@/components/ui/icon";
import BeforeAfterSlider from "./BeforeAfterSlider";
import {
  HERO_IMG, STUDIO_IMG, LION_LOGO,
  SERVICES, PRICING, PORTFOLIO_ITEMS, REVIEWS, NAV_LINKS,
  scrollTo,
} from "./data";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Детейлинг" className="w-full h-full object-cover" style={{ opacity: 0.4 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.7) 60%, rgba(10,10,10,1) 100%)" }} />
      </div>
      <div className="absolute top-0 left-0 w-px h-full" style={{ background: "linear-gradient(180deg, transparent 0%, #C9A84C 30%, #C9A84C 70%, transparent 100%)", opacity: 0.15 }} />
      <div className="absolute top-0 right-0 w-px h-full" style={{ background: "linear-gradient(180deg, transparent 0%, #C9A84C 30%, #C9A84C 70%, transparent 100%)", opacity: 0.15 }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p className="animate-fade-in" style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.5em", textTransform: "uppercase", color: "#C9A84C", opacity: 0.85, marginBottom: "24px" }}>
          Премиум детейлинг — Москва
        </p>
        <h1 className="animate-fade-in-delay-1" style={{ fontFamily: "'Cormorant', serif", fontWeight: 300, lineHeight: 1.0, fontSize: "clamp(44px, 7vw, 96px)", marginBottom: "32px" }}>
          Защитим кузов вашего авто<br />
          от реагентов и<br />
          <span className="text-gold-gradient"><em style={{ fontStyle: "normal" }}>перепадов температур</em></span>
        </h1>
        <p className="animate-fade-in-delay-2" style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "15px", color: "rgba(237,232,222,0.55)", letterSpacing: "0.02em", maxWidth: "480px", margin: "0 auto 40px", lineHeight: 1.7 }}>
          Керамика 9H — до 5 лет защиты. Полировка, PPF и химчистка — без компромиссов.
        </p>
        <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollTo("#contacts")} className="btn-gold px-10 py-4 text-sm tracking-[0.15em] rounded-sm">
            Записаться на детейлинг
          </button>
          <button onClick={() => scrollTo("#pricing")} className="btn-outline-gold px-10 py-4 text-sm tracking-[0.15em] rounded-sm">
            Посмотреть цены
          </button>
        </div>

        <div className="animate-fade-in-delay-4 grid grid-cols-3 gap-8 mt-20 pt-10" style={{ borderTop: "1px solid rgba(201,168,76,0.12)" }}>
          {[["8+", "лет опыта"], ["1 200+", "автомобилей"], ["100%", "гарантия"]].map(([num, label]) => (
            <div key={label} className="text-center">
              <div style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, color: "#C9A84C" }}>{num}</div>
              <div style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(237,232,222,0.38)", marginTop: "4px" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ opacity: 0.4 }}>
        <div className="w-px h-8 mx-auto" style={{ background: "#C9A84C" }} />
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.5em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>Что мы делаем</p>
        <h2 style={{ fontFamily: "'Cormorant', serif", fontWeight: 300, fontSize: "clamp(38px, 5vw, 58px)", marginBottom: "16px" }}>Наши услуги</h2>
        <div className="section-divider mx-auto mt-6" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s) => (
          <div key={s.title} className="card-luxury p-8 rounded-sm relative group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-6"
              style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <Icon name={s.icon} fallback="Star" size={18} className="text-gold" />
            </div>
            <h3 style={{ fontFamily: "'Cormorant', serif", fontSize: "22px", fontWeight: 300, marginBottom: "12px", color: "#EDE8DE" }}>{s.title}</h3>
            <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "13px", color: "rgba(237,232,222,0.55)", lineHeight: 1.7 }}>{s.desc}</p>
            <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
              style={{ background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="pricing" className="py-28 px-6 md:px-12" style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #0D0C09 50%, #0A0A0A 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.5em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>Прозрачные цены</p>
          <h2 style={{ fontFamily: "'Cormorant', serif", fontWeight: 300, fontSize: "clamp(38px, 5vw, 58px)", marginBottom: "16px" }}>Прайс-лист</h2>
          <div className="section-divider mx-auto mt-6" />
          <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "13px", color: "rgba(237,232,222,0.48)", marginTop: "20px", maxWidth: "480px", margin: "20px auto 0" }}>
            Точная стоимость зависит от класса и состояния автомобиля. Окончательная цена — после осмотра.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRICING.map((cat) => (
            <div key={cat.category} className="card-luxury rounded-sm overflow-hidden">
              <div className="px-7 py-5" style={{ borderBottom: "1px solid rgba(201,168,76,0.15)", background: "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 100%)" }}>
                <h3 style={{ fontFamily: "'Cormorant', serif", fontSize: "20px", fontWeight: 300, letterSpacing: "0.05em", color: "#C9A84C" }}>{cat.category}</h3>
              </div>
              <div>
                {cat.items.map((item, idx) => (
                  <div key={item.name} className="px-7 py-4 flex items-center justify-between gap-4"
                    style={{ borderTop: idx > 0 ? "1px solid rgba(201,168,76,0.06)" : "none" }}>
                    <span style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "13px", color: "rgba(237,232,222,0.68)", lineHeight: 1.4, flex: 1 }}>{item.name}</span>
                    <span style={{ fontFamily: "'Cormorant', serif", fontSize: "18px", fontWeight: 300, color: "#C9A84C", whiteSpace: "nowrap" }}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={() => scrollTo("#contacts")} className="btn-gold px-12 py-4 text-sm tracking-[0.15em] rounded-sm">
            Получить точный расчёт
          </button>
        </div>
      </div>
    </section>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.5em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>Наши работы</p>
        <h2 style={{ fontFamily: "'Cormorant', serif", fontWeight: 300, fontSize: "clamp(38px, 5vw, 58px)", marginBottom: "16px" }}>До и после</h2>
        <div className="section-divider mx-auto mt-6" />
        <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "13px", color: "rgba(237,232,222,0.45)", marginTop: "20px" }}>
          Перетащите разделитель, чтобы увидеть результат
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PORTFOLIO_ITEMS.map((p) => (
          <BeforeAfterSlider key={p.label} before={p.before} after={p.after} label={p.label} tag={p.tag} />
        ))}
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 overflow-hidden" style={{ background: "#0D0D0D" }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={STUDIO_IMG} alt="Наша студия" className="w-full rounded-sm object-cover"
            style={{ aspectRatio: "4/3", border: "1px solid rgba(201,168,76,0.12)", opacity: 0.88 }} />
          <div className="absolute -bottom-5 -right-5 px-6 py-4 rounded-sm"
            style={{ background: "#111", border: "1px solid rgba(201,168,76,0.2)" }}>
            <div style={{ fontFamily: "'Cormorant', serif", fontSize: "32px", fontWeight: 300, color: "#C9A84C" }}>8+</div>
            <div style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(237,232,222,0.45)", marginTop: "2px" }}>лет на рынке</div>
          </div>
        </div>
        <div>
          <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.5em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>О нас</p>
          <h2 style={{ fontFamily: "'Cormorant', serif", fontWeight: 300, fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15, marginBottom: "24px" }}>
            Студия, где каждый<br />
            <span className="text-gold-gradient">автомобиль — шедевр</span>
          </h2>
          <div className="section-divider mb-8" />
          <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "13px", color: "rgba(237,232,222,0.58)", lineHeight: 1.8, marginBottom: "20px" }}>
            Мы — команда сертифицированных мастеров с опытом работы с автомобилями Ferrari, Bentley, Rolls-Royce и другими марками люксового сегмента.
          </p>
          <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "13px", color: "rgba(237,232,222,0.58)", lineHeight: 1.8, marginBottom: "36px" }}>
            Используем только профессиональные материалы: Gtechniq, GYEON, Nanolex. Каждая работа выполняется в контролируемых условиях с соблюдением технологии.
          </p>
          <div className="grid grid-cols-2 gap-5">
            {[
              "Сертифицированные мастера",
              "Гарантия на все виды работ",
              "Только оригинальные материалы",
              "Фотоотчёт после каждой работы",
            ].map(text => (
              <div key={text} className="flex items-start gap-3">
                <Icon name="Check" size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "13px", color: "rgba(237,232,222,0.68)", lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.5em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "16px" }}>Отзывы клиентов</p>
        <h2 style={{ fontFamily: "'Cormorant', serif", fontWeight: 300, fontSize: "clamp(38px, 5vw, 58px)", marginBottom: "16px" }}>Говорят о нас</h2>
        <div className="section-divider mx-auto mt-6" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((r) => (
          <div key={r.name} className="card-luxury p-8 rounded-sm flex flex-col gap-5">
            <div className="flex gap-1">
              {Array.from({ length: r.stars }).map((_, i) => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C9A84C" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "13px", color: "rgba(237,232,222,0.62)", lineHeight: 1.75, fontStyle: "italic", flex: 1 }}>«{r.text}»</p>
            <div style={{ paddingTop: "16px", borderTop: "1px solid rgba(201,168,76,0.1)" }}>
              <div style={{ fontFamily: "'Cormorant', serif", fontSize: "18px", color: "#EDE8DE" }}>{r.name}</div>
              <div style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(201,168,76,0.7)", marginTop: "2px" }}>{r.car}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContactsSection() {
  return (
    <section id="contacts" className="py-28 px-6 md:px-12 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #0E0C08 100%)" }}>
      <div className="absolute inset-0 flex items-center justify-center" style={{ pointerEvents: "none" }}>
        <div style={{ width: "600px", height: "600px", borderRadius: "50%", background: "#C9A84C", filter: "blur(120px)", opacity: 0.04 }} />
      </div>
      <div className="relative max-w-3xl mx-auto text-center">
        <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.5em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "24px" }}>Записаться</p>
        <h2 style={{ fontFamily: "'Cormorant', serif", fontWeight: 300, fontSize: "clamp(38px, 5vw, 58px)", lineHeight: 1.2, marginBottom: "16px" }}>
          Доверьте нам свой<br />
          <span className="text-gold-gradient">автомобиль</span>
        </h2>
        <div className="section-divider mx-auto mt-6 mb-10" />

        <div className="card-luxury rounded-sm p-8 md:p-12 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div>
              <label style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(237,232,222,0.45)", display: "block", marginBottom: "8px" }}>Ваше имя</label>
              <input type="text" placeholder="Александр"
                style={{ width: "100%", background: "transparent", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "2px", padding: "12px 16px", fontFamily: "'Golos Text', sans-serif", fontSize: "13px", color: "#EDE8DE", outline: "none" }}
                className="focus:border-gold/60 transition-colors placeholder:text-[#EDE8DE]/20"
              />
            </div>
            <div>
              <label style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(237,232,222,0.45)", display: "block", marginBottom: "8px" }}>Телефон</label>
              <input type="tel" placeholder="+7 (___) ___-__-__"
                style={{ width: "100%", background: "transparent", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "2px", padding: "12px 16px", fontFamily: "'Golos Text', sans-serif", fontSize: "13px", color: "#EDE8DE", outline: "none" }}
                className="focus:border-gold/60 transition-colors placeholder:text-[#EDE8DE]/20"
              />
            </div>
          </div>
          <div className="mb-5">
            <label style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(237,232,222,0.45)", display: "block", marginBottom: "8px" }}>Ваш автомобиль</label>
            <input type="text" placeholder="Например, Mercedes-Benz S500"
              style={{ width: "100%", background: "transparent", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "2px", padding: "12px 16px", fontFamily: "'Golos Text', sans-serif", fontSize: "13px", color: "#EDE8DE", outline: "none" }}
              className="focus:border-gold/60 transition-colors placeholder:text-[#EDE8DE]/20"
            />
          </div>
          <div className="mb-8">
            <label style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(237,232,222,0.45)", display: "block", marginBottom: "8px" }}>Интересующая услуга</label>
            <textarea rows={3} placeholder="Расскажите, что хотите сделать..."
              style={{ width: "100%", background: "transparent", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "2px", padding: "12px 16px", fontFamily: "'Golos Text', sans-serif", fontSize: "13px", color: "#EDE8DE", outline: "none", resize: "none" }}
              className="focus:border-gold/60 transition-colors placeholder:text-[#EDE8DE]/20"
            />
          </div>
          <button className="btn-gold w-full py-4 text-sm tracking-[0.15em] rounded-sm">
            Отправить заявку
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          {[
            { icon: "Phone", label: "Телефон", value: "+7 (999) 000-00-00" },
            { icon: "MapPin", label: "Адрес", value: "Москва, ул. Примерная, 1" },
            { icon: "Clock", label: "Время работы", value: "Пн–Вс, 9:00–21:00" },
          ].map(c => (
            <div key={c.label} className="text-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <Icon name={c.icon} fallback="Phone" size={16} className="text-gold" />
              </div>
              <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(237,232,222,0.38)", marginBottom: "4px" }}>{c.label}</p>
              <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "13px", color: "rgba(237,232,222,0.72)" }}>{c.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(201,168,76,0.1)", padding: "32px 48px" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3" style={{ fontFamily: "'Cormorant', serif", fontSize: "20px", fontWeight: 300, letterSpacing: "0.25em", color: "#C9A84C" }}>
          <img src={LION_LOGO} alt="Золотой Лев" style={{ width: "30px", height: "30px", objectFit: "cover", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.35)" }} />
          ЗОЛОТОЙ ЛЕВ
        </div>
        <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(237,232,222,0.28)" }}>
          © 2024 ЗОЛОТОЙ ЛЕВ — Премиум детейлинг Москва
        </p>
        <div className="flex gap-6">
          {NAV_LINKS.slice(0, 4).map(l => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(237,232,222,0.32)", background: "none", border: "none", cursor: "pointer" }}>
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}