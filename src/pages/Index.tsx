import { useState } from "react";
import Icon from "@/components/ui/icon";

const LION_LOGO = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/8f87fb2f-9bf3-41e4-82c1-cdb2ed50aaa0.jpg";

const HERO_IMG = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/edfe7ded-bc46-42cb-9ec9-db6779916cbe.jpg";
const STUDIO_IMG = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/9cb44ff8-3aae-463f-9837-759e391126fa.jpg";
const PORTFOLIO_IMG = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/06ca88f6-43e2-4379-8a26-b1b3d356e6f2.jpg";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Прайс", href: "#pricing" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "О нас", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "Sparkles",
    title: "Детейлинг кузова",
    desc: "Профессиональная полировка, удаление царапин и восстановление блеска лакокрасочного покрытия.",
  },
  {
    icon: "Shield",
    title: "Керамическое покрытие",
    desc: "Нанокерамика сроком до 5 лет — защита от UV, химии и механических воздействий.",
  },
  {
    icon: "Layers",
    title: "Оклейка плёнкой",
    desc: "PPF защитная плёнка или виниловая смена цвета. Идеальная укладка без пузырей.",
  },
  {
    icon: "Wind",
    title: "Химчистка салона",
    desc: "Глубокая чистка всех поверхностей, озонирование и восстановление кожи.",
  },
  {
    icon: "Zap",
    title: "Экспресс детейлинг",
    desc: "Быстрое восстановление внешнего вида за 2–3 часа без ущерба для качества.",
  },
  {
    icon: "Star",
    title: "Жидкое стекло",
    desc: "Жидкое стекло для кузова — гидрофобный эффект и блеск на весь сезон.",
  },
];

const PRICING = [
  {
    category: "Полировка кузова",
    items: [
      { name: "Лёгкая полировка (1 проход)", price: "от 8 000 ₽" },
      { name: "Комплексная полировка (2 прохода)", price: "от 18 000 ₽" },
      { name: "Абразивная коррекция + полировка", price: "от 32 000 ₽" },
    ],
  },
  {
    category: "Керамическое покрытие",
    items: [
      { name: "Ceramic Lite (1 год)", price: "от 15 000 ₽" },
      { name: "Ceramic Pro (3 года)", price: "от 35 000 ₽" },
      { name: "Ceramic Ultra (5 лет)", price: "от 65 000 ₽" },
    ],
  },
  {
    category: "Защитная плёнка PPF",
    items: [
      { name: "Бампер передний", price: "от 12 000 ₽" },
      { name: "Капот + крылья", price: "от 25 000 ₽" },
      { name: "Полная оклейка кузова", price: "от 120 000 ₽" },
    ],
  },
  {
    category: "Химчистка салона",
    items: [
      { name: "Экспресс-чистка", price: "от 4 000 ₽" },
      { name: "Комплексная химчистка", price: "от 12 000 ₽" },
      { name: "Полная реставрация салона", price: "от 28 000 ₽" },
    ],
  },
];

const AUDI_IMG = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/763b5196-5ebc-45eb-9985-99eea2f25e84.jpg";
const MERCEDES_IMG = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/0181558b-674e-4bab-bc1b-c3d289a53e12.jpg";
const BMW_IMG = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/7a9faeec-1a69-47b7-b4c8-03d338e31c17.jpg";
const AUDI_BEFORE = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/a4b81919-55d6-48d8-81f3-8d3c0b02660a.jpg";
const MERCEDES_BEFORE = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/670b043d-3f0f-4ad9-93b6-3a002fa05a64.jpg";
const BMW_BEFORE = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/051d1e2d-14ab-4bef-85f0-bff6d06daf92.jpg";

const PORTFOLIO_ITEMS = [
  { label: "Audi RS7 Sportback", tag: "Керамика + полировка", before: AUDI_BEFORE, after: AUDI_IMG },
  { label: "Mercedes-Benz S500", tag: "PPF + химчистка", before: MERCEDES_BEFORE, after: MERCEDES_IMG },
  { label: "BMW M5 Competition", tag: "Полировка 2 прохода", before: BMW_BEFORE, after: BMW_IMG },
];

const REVIEWS = [
  {
    name: "Алексей Р.",
    car: "Porsche Panamera",
    stars: 5,
    text: "Отдал машину после аварийного ремонта — вернули как новую. Ребята знают своё дело. Керамика держится второй год без потерь.",
  },
  {
    name: "Марина К.",
    car: "Mercedes GLE",
    stars: 5,
    text: "Очень внимательный подход. Подробно рассказали что и зачем, показали результат до/после. Цены честные, никаких сюрпризов.",
  },
  {
    name: "Дмитрий В.",
    car: "BMW M5",
    stars: 5,
    text: "Делали полную оклейку PPF. Качество идеальное, швы практически незаметны. Сроки соблюли. Буду рекомендовать всем знакомым.",
  },
];

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

function BeforeAfterSlider({ before, after, label, tag }: { before: string; after: string; label: string; tag: string }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = { current: null as HTMLDivElement | null };

  const updatePos = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  };

  return (
    <div className="rounded-sm overflow-hidden" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
      <div
        ref={(el) => { containerRef.current = el; }}
        className="relative select-none"
        style={{ aspectRatio: "4/3", cursor: "col-resize" }}
        onMouseDown={(e) => { setDragging(true); updatePos(e.clientX); }}
        onMouseMove={(e) => { if (dragging) updatePos(e.clientX); }}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onTouchStart={(e) => { setDragging(true); updatePos(e.touches[0].clientX); }}
        onTouchMove={(e) => { updatePos(e.touches[0].clientX); }}
        onTouchEnd={() => setDragging(false)}
      >
        {/* AFTER (base) */}
        <img src={after} alt="После" className="absolute inset-0 w-full h-full object-cover" />

        {/* BEFORE (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt="До" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000 / pos}%`, maxWidth: "none" }} />
        </div>

        {/* Divider line */}
        <div className="absolute top-0 bottom-0 w-px" style={{ left: `${pos}%`, background: "#C9A84C", boxShadow: "0 0 12px rgba(201,168,76,0.6)" }}>
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "#0A0A0A", border: "2px solid #C9A84C", boxShadow: "0 0 16px rgba(201,168,76,0.5)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
              <path d="M8 9l-4 3 4 3M16 9l4 3-4 3"/>
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 px-2 py-1 rounded-sm text-[10px] tracking-widest uppercase"
          style={{ background: "rgba(10,10,10,0.75)", color: "rgba(237,232,222,0.6)", fontFamily: "'Golos Text', sans-serif", pointerEvents: "none" }}>
          До
        </div>
        <div className="absolute top-3 right-3 px-2 py-1 rounded-sm text-[10px] tracking-widest uppercase"
          style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)", color: "#C9A84C", fontFamily: "'Golos Text', sans-serif", pointerEvents: "none" }}>
          После
        </div>
      </div>

      {/* Card footer */}
      <div className="px-6 py-4" style={{ background: "#111" }}>
        <p style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A84C", marginBottom: "4px" }}>{tag}</p>
        <h4 style={{ fontFamily: "'Cormorant', serif", fontSize: "20px", fontWeight: 300, color: "#EDE8DE" }}>{label}</h4>
      </div>
    </div>
  );
}

const Index = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDE8DE] overflow-x-hidden" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.0) 100%)" }}>
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
        <button
          onClick={() => handleNav("#contacts")}
          className="hidden md:block btn-gold px-5 py-2 text-xs tracking-[0.15em] rounded-sm"
        >
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

      {/* HERO */}
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
          <h1 className="animate-fade-in-delay-1" style={{ fontFamily: "'Cormorant', serif", fontWeight: 300, lineHeight: 0.9, fontSize: "clamp(60px, 10vw, 120px)", marginBottom: "32px" }}>
            Ваш автомобиль<br />
            <span className="text-gold-gradient"><em style={{ fontStyle: "normal" }}>заслуживает</em></span><br />
            совершенства
          </h1>
          <p className="animate-fade-in-delay-2" style={{ fontFamily: "'Golos Text', sans-serif", fontSize: "15px", color: "rgba(237,232,222,0.55)", letterSpacing: "0.02em", maxWidth: "480px", margin: "0 auto 40px", lineHeight: 1.7 }}>
            Профессиональный уход за автомобилем премиум-класса. Керамика, полировка, PPF и химчистка — без компромиссов.
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

      {/* SERVICES */}
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

      {/* PRICING */}
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

      {/* PORTFOLIO */}
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

      {/* ABOUT */}
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

      {/* REVIEWS */}
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
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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

      {/* CONTACTS */}
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

      {/* FOOTER */}
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
    </div>
  );
};

export default Index;