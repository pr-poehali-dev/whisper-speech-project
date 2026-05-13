import { motion } from "framer-motion";
import { useState } from "react";

const timelinePoints = [
  {
    year: "1927",
    label: "Первый фильм",
    fact: "На студии вышел первый звуковой фильм. Технология была новаторской для советского кино.",
    film: "«Земля» Александра Довженко — поэтическое кино об украинских крестьянах",
  },
  {
    year: "1934",
    label: "Расцвет студии",
    fact: "Мосфильм становится главной кинофабрикой СССР. Строятся новые павильоны.",
    film: "«Чапаев» — легендарный фильм братьев Васильевых, ставший символом эпохи",
  },
  {
    year: "1938",
    label: "Звук и цвет",
    fact: "Первые эксперименты с цветным кино. Студия насчитывает более 3000 сотрудников.",
    film: "«Александр Невский» С. Эйзенштейна с музыкой Прокофьева — шедевр эпохи",
  },
];

export default function Chapter1Birth() {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  return (
    <section
      id="chapter1"
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
            Глава 01
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight" style={{ color: '#0B1B3D', fontFamily: 'Montserrat, sans-serif' }}>
            Рождение
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#1E1E1E', fontFamily: 'Inter, sans-serif' }}>
              В 1924 году на юго-западной окраине Москвы, у Воробьёвых гор, началось строительство киностудии. Место выбрали не случайно: открытые пространства, чистый воздух и удалённость от городского шума — идеальные условия для съёмок.
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#1E1E1E', fontFamily: 'Inter, sans-serif' }}>
              В первые годы студия работала в условиях постоянной нехватки плёнки, оборудования и квалифицированных кадров. Тем не менее именно здесь начинали свою карьеру Сергей Эйзенштейн, Всеволод Пудовкин и другие мастера мирового кино.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#555', fontFamily: 'Inter, sans-serif' }}>
              К концу 1930-х Мосфильм превратился в мощный производственный комплекс, способный выпускать десятки фильмов в год.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative overflow-hidden" style={{ height: 400 }}>
              <img
                src="/images/exterior.png"
                alt="Первый павильон Мосфильма"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(80%)' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,27,61,0.6) 0%, transparent 60%)' }} />
              <div className="absolute bottom-4 left-4 text-white/60 text-xs uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Первый павильон, 1930-е
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-widest mb-8 font-semibold"
            style={{ color: '#0B1B3D', fontFamily: 'Montserrat, sans-serif' }}
          >
            Ключевые вехи — кликни на год
          </motion.div>

          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-px" style={{ background: 'rgba(212,175,55,0.3)' }} />
            <div className="flex justify-between relative">
              {timelinePoints.map((point, i) => (
                <motion.div
                  key={point.year}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center cursor-pointer group relative"
                  style={{ flex: 1 }}
                  onClick={() => setActivePoint(activePoint === i ? null : i)}
                >
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-3 h-3 rounded-full border-2 mb-3 transition-all duration-300"
                    style={{
                      background: activePoint === i ? '#D4AF37' : '#0B1B3D',
                      borderColor: '#D4AF37',
                    }}
                  />
                  <span
                    className="text-lg font-black"
                    style={{ color: '#0B1B3D', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {point.year}
                  </span>
                  <span
                    className="text-xs text-center mt-1 hidden md:block"
                    style={{ color: '#888', fontFamily: 'Inter, sans-serif' }}
                  >
                    {point.label}
                  </span>

                  {activePoint === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute top-16 z-20 p-4 shadow-xl max-w-xs w-64 text-left"
                      style={{
                        background: '#0B1B3D',
                        border: '1px solid rgba(212,175,55,0.4)',
                        left: i === 2 ? 'auto' : '50%',
                        right: i === 2 ? 0 : 'auto',
                        transform: i === 2 ? 'none' : 'translateX(-50%)',
                      }}
                    >
                      <div className="text-xs font-bold mb-2" style={{ color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}>
                        {point.year}
                      </div>
                      <p className="text-sm text-white/90 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {point.fact}
                      </p>
                      <p className="text-xs" style={{ color: 'rgba(212,175,55,0.7)', fontFamily: 'Inter, sans-serif' }}>
                        {point.film}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
