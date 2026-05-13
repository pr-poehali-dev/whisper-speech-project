import { motion } from "framer-motion";

const chapters = [
  { num: "01", title: "Рождение", subtitle: "1924–1941", href: "#chapter1" },
  { num: "02", title: "Эвакуация", subtitle: "1941–1945", href: "#chapter2" },
  { num: "03", title: "Золотой век", subtitle: "1946–1980", href: "#chapter3" },
  { num: "04", title: "Перестройка", subtitle: "1985–2005", href: "#chapter4" },
  { num: "05", title: "Сегодня", subtitle: "2006 — наши дни", href: "#chapter5" },
];

export default function TableOfContents() {
  return (
    <section
      id="toc"
      className="min-h-screen flex items-center py-24 px-6"
      style={{ background: '#0B1B3D' }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-xs uppercase tracking-widest mb-4" style={{ color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}>
            Содержание
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            История одной студии
          </h2>
        </motion.div>

        <div className="flex flex-col divide-y" style={{ borderColor: 'rgba(212,175,55,0.15)' }}>
          {chapters.map((ch, i) => (
            <motion.a
              key={ch.num}
              href={ch.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(ch.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ x: 12 }}
              className="flex items-center justify-between py-6 group cursor-pointer"
            >
              <div className="flex items-center gap-8">
                <span
                  className="text-xs font-semibold tabular-nums"
                  style={{ color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}
                >
                  {ch.num}
                </span>
                <span
                  className="text-xl md:text-3xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {ch.title}
                </span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm hidden md:block" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>
                  {ch.subtitle}
                </span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
