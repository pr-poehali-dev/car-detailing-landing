export const LION_LOGO = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/8f87fb2f-9bf3-41e4-82c1-cdb2ed50aaa0.jpg";
export const HERO_IMG = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/edfe7ded-bc46-42cb-9ec9-db6779916cbe.jpg";
export const STUDIO_IMG = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/9cb44ff8-3aae-463f-9837-759e391126fa.jpg";
export const PORTFOLIO_IMG = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/06ca88f6-43e2-4379-8a26-b1b3d356e6f2.jpg";
export const AUDI_IMG = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/763b5196-5ebc-45eb-9985-99eea2f25e84.jpg";
export const MERCEDES_IMG = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/0181558b-674e-4bab-bc1b-c3d289a53e12.jpg";
export const BMW_IMG = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/7a9faeec-1a69-47b7-b4c8-03d338e31c17.jpg";
export const AUDI_BEFORE = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/a4b81919-55d6-48d8-81f3-8d3c0b02660a.jpg";
export const MERCEDES_BEFORE = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/670b043d-3f0f-4ad9-93b6-3a002fa05a64.jpg";
export const BMW_BEFORE = "https://cdn.poehali.dev/projects/dde21345-0b84-451f-9064-c9d2f1160057/files/051d1e2d-14ab-4bef-85f0-bff6d06daf92.jpg";

export const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Прайс", href: "#pricing" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "О нас", href: "#about" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export const SERVICES = [
  { icon: "Sparkles", title: "Детейлинг кузова", desc: "Профессиональная полировка, удаление царапин и восстановление блеска лакокрасочного покрытия." },
  { icon: "Shield", title: "Керамическое покрытие", desc: "Нанокерамика сроком до 5 лет — защита от UV, химии и механических воздействий." },
  { icon: "Layers", title: "Оклейка плёнкой", desc: "PPF защитная плёнка или виниловая смена цвета. Идеальная укладка без пузырей." },
  { icon: "Wind", title: "Химчистка салона", desc: "Глубокая чистка всех поверхностей, озонирование и восстановление кожи." },
  { icon: "Zap", title: "Экспресс детейлинг", desc: "Быстрое восстановление внешнего вида за 2–3 часа без ущерба для качества." },
  { icon: "Star", title: "Жидкое стекло", desc: "Жидкое стекло для кузова — гидрофобный эффект и блеск на весь сезон." },
];

export const PRICING = [
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

export const PORTFOLIO_ITEMS = [
  { label: "Audi RS7 Sportback", tag: "Керамика + полировка", before: AUDI_BEFORE, after: AUDI_IMG },
  { label: "Mercedes-Benz S500", tag: "PPF + химчистка", before: MERCEDES_BEFORE, after: MERCEDES_IMG },
  { label: "BMW M5 Competition", tag: "Полировка 2 прохода", before: BMW_BEFORE, after: BMW_IMG },
];

export const REVIEWS = [
  { name: "Алексей Р.", car: "Porsche Panamera", stars: 5, text: "Отдал машину после аварийного ремонта — вернули как новую. Ребята знают своё дело. Керамика держится второй год без потерь." },
  { name: "Марина К.", car: "Mercedes GLE", stars: 5, text: "Очень внимательный подход. Подробно рассказали что и зачем, показали результат до/после. Цены честные, никаких сюрпризов." },
  { name: "Дмитрий В.", car: "BMW M5", stars: 5, text: "Делали полную оклейку PPF. Качество идеальное, швы практически незаметны. Сроки соблюли. Буду рекомендовать всем знакомым." },
];

export const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
