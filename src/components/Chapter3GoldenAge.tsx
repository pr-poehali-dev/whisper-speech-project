import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const films = [
  {
    title: "Война и мир",
    year: "1965–1967",
    director: "Сергей Бондарчук",
    awards: "Оскар за лучший иностранный фильм 1969",
    description: "Эпическая экранизация романа Толстого. 6 лет работы, 15 000 статистов в батальных сценах, бюджет 8 миллионов советских рублей — крупнейший в истории советского кино.",
    fact: "Для съёмок сцены Бородинской битвы использовалась реальная советская армия — более 12 000 солдат.",
    color: "#1a2a4a",
  },
  {
    title: "Бриллиантовая рука",
    year: "1969",
    director: "Леонид Гайдай",
    awards: "Фильм-лидер советского проката 1969 года",
    description: "Культовая комедия, ставшая одним из самых цитируемых фильмов в истории советского кино. Фраза «Шампанское, икра, кэш» была вырезана цензурой.",
    fact: "30 миллионов зрителей посмотрели фильм в первый год проката — абсолютный рекорд.",
    color: "#2a1a0a",
  },
  {
    title: "Солярис",
    year: "1972",
    director: "Андрей Тарковский",
    awards: "Гран-при жюри Каннского кинофестиваля 1972",
    description: "Философская фантастика по роману Станислава Лема. Тарковский превратил научную фантастику в разговор о природе памяти, любви и человечности.",
    fact: "Сцена невесомости снималась в реальном токийском тоннеле — город будущего, который можно увидеть прямо сейчас.",
    color: "#0a1a2a",
  },
];

export default function Chapter3GoldenAge() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="chapter3"
      className="min-h-screen py-24 px-6"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-xs uppercase tracking-widest mb-3 font-semibold" style={{ color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}>
            Глава 03
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight" style={{ color: '#0B1B3D', fontFamily: 'Montserrat, sans-serif' }}>
            Золотой век
          </h2>
          <p className="text-base mt-4 max-w-xl" style={{ color: '#555', fontFamily: 'Inter, sans-serif' }}>
            С 1946 по 1980-е Мосфильм создал фильмы, вошедшие в золотой фонд мирового кино. Кликни на карточку, чтобы узнать больше.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {films.map((film, i) => (
            <motion.div
              key={film.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setActiveCard(activeCard === i ? null : i)}
              className="cursor-pointer relative overflow-hidden"
              style={{
                background: '#0B1B3D',
                border: activeCard === i ? '1px solid #D4AF37' : '1px solid rgba(11,27,61,0.15)',
              }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="p-8"
                style={{ minHeight: activeCard === i ? 'auto' : 280 }}
              >
                <div
                  className="text-xs uppercase tracking-widest mb-4 font-semibold"
                  style={{ color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}
                >
                  {film.year}
                </div>
                <h3
                  className="text-2xl font-black text-white mb-2 leading-tight"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {film.title}
                </h3>
                <p className="text-white/50 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Реж. {film.director}
                </p>

                <AnimatePresence>
                  {activeCard === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(212,175,55,0.2)' }}>
                        <p className="text-white/80 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {film.description}
                        </p>
                        <div className="p-3" style={{ background: 'rgba(212,175,55,0.1)', borderLeft: '2px solid #D4AF37' }}>
                          <p className="text-xs" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
                            {film.fact}
                          </p>
                        </div>
                        <div className="mt-4 text-xs uppercase tracking-wide" style={{ color: 'rgba(212,175,55,0.6)', fontFamily: 'Montserrat, sans-serif' }}>
                          🏆 {film.awards}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {activeCard !== i && (
                  <div className="absolute bottom-6 right-6">
                    <div className="text-xs" style={{ color: 'rgba(212,175,55,0.5)', fontFamily: 'Inter, sans-serif' }}>
                      Подробнее →
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
