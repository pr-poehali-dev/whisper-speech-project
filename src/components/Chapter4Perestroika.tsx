import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const years = [
  {
    year: 1985,
    films: 25,
    fact: "В середине 1980-х студия работала на полную мощность. Ежегодно выходило более 25 фильмов. «Москва слезам не верит» незадолго до этого получила «Оскар».",
  },
  {
    year: 1995,
    films: 3,
    fact: "Распад СССР обрушил государственное финансирование кино. Студия оказалась на грани закрытия — всего 3 фильма за год. Многие павильоны пустовали.",
  },
  {
    year: 2005,
    films: 12,
    fact: "Постепенное восстановление. Студия нашла новую модель — коммерческие съёмки, аренда площадок, реставрация классики. 12 фильмов — знак возрождения.",
  },
];

const maxFilms = 25;

export default function Chapter4Perestroika() {
  const [activeYear, setActiveYear] = useState<number | null>(null);

  return (
    <section
      id="chapter4"
      className="min-h-screen py-24 px-6"
      style={{ background: '#0B1B3D' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="mb-12"
            >
              <div className="text-xs uppercase tracking-widest mb-3 font-semibold" style={{ color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}>
                Глава 04
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Перестройка
              </h2>
              <p className="text-white/60 mt-4 text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                Распад советской системы поставил студию перед вызовом выживания. Кликни на год — узнай, что происходило.
              </p>
            </motion.div>

            <div className="space-y-8">
              {years.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  onClick={() => setActiveYear(activeYear === item.year ? null : item.year)}
                  className="cursor-pointer group"
                >
                  <div className="flex items-center gap-6 mb-3">
                    <span
                      className="text-2xl font-black group-hover:text-yellow-300 transition-colors duration-300"
                      style={{
                        color: activeYear === item.year ? '#D4AF37' : 'rgba(255,255,255,0.6)',
                        fontFamily: 'Montserrat, sans-serif',
                        minWidth: 60,
                      }}
                    >
                      {item.year}
                    </span>
                    <div className="flex-1 relative h-2" style={{ background: 'rgba(255,255,255,0.08)' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.films / maxFilms) * 100}%` }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, delay: i * 0.2 + 0.3, ease: 'easeOut' }}
                        style={{ background: item.films < 10 ? '#e05555' : '#D4AF37', height: '100%' }}
                      />
                    </div>
                    <span
                      className="text-sm font-semibold w-24 text-right"
                      style={{ color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {item.films} фильмов
                    </span>
                  </div>

                  <AnimatePresence>
                    {activeYear === item.year && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="ml-16 p-4 text-sm leading-relaxed"
                          style={{
                            background: 'rgba(212,175,55,0.08)',
                            borderLeft: '2px solid #D4AF37',
                            color: 'rgba(255,255,255,0.8)',
                            fontFamily: 'Inter, sans-serif',
                          }}
                        >
                          {item.fact}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 lg:max-w-md"
          >
            <div className="relative overflow-hidden" style={{ height: 480 }}>
              <img
                src="https://www.mosfilm.ru/upload/iblock/22d/j71i4uiu9fg6xx8qqrj5cjb9zpn640s5/Frame-2131330281_min.jpg"
                alt="Запущенный павильон Мосфильма"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(60%) brightness(0.7)' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,27,61,0.4) 0%, transparent 60%)' }} />
              <div
                className="absolute bottom-6 left-6 p-4"
                style={{ background: 'rgba(11,27,61,0.85)', border: '1px solid rgba(212,175,55,0.3)' }}
              >
                <p className="text-xs text-white/50 uppercase tracking-wider mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  1990-е
                </p>
                <p className="text-sm text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Пустые павильоны. Студия искала новый путь.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}