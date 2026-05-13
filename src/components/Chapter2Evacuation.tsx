import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    title: "Июль 1941: приказ об эвакуации",
    text: "Через месяц после начала войны руководство студии получило приказ об эвакуации. За несколько дней были упакованы тысячи метров плёнки, камеры, осветительное оборудование.",
    detail: "Оборудование вывозили на грузовиках под обстрелами — каждый ящик был на вес золота.",
    img: "https://cdn.poehali.dev/projects/ca3d42f6-d34b-4d20-8a83-e2dbf1c5b042/files/8ec21196-85e4-41cb-a72a-4075e9945f40.jpg",
  },
  {
    title: "Алма-Ата: студия в эвакуации",
    text: "Мосфильм объединился с Ленфильмом и образовал ЦОКС — Центральную объединённую киностудию в Алма-Ате. В невероятно тяжёлых условиях продолжали снимать фильмы для фронта.",
    detail: "Здесь в эвакуации снималось более 80% советских фильмов военных лет.",
    img: "https://cdn.poehali.dev/projects/ca3d42f6-d34b-4d20-8a83-e2dbf1c5b042/files/8ec21196-85e4-41cb-a72a-4075e9945f40.jpg",
  },
  {
    title: "Возвращение. 1944",
    text: "Ещё до окончания войны часть сотрудников вернулась в Москву. Студия была частично разрушена, но работа не останавливалась — кино было нужно стране как воздух.",
    detail: "Первым послевоенным фильмом стала картина «Иван Грозный» С. Эйзенштейна.",
    img: "https://cdn.poehali.dev/projects/ca3d42f6-d34b-4d20-8a83-e2dbf1c5b042/files/8ec21196-85e4-41cb-a72a-4075e9945f40.jpg",
  },
];

export default function Chapter2Evacuation() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="chapter2"
      className="min-h-screen flex flex-col justify-center py-24 px-6"
      style={{ background: '#0B1B3D' }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="text-xs uppercase tracking-widest mb-3 font-semibold" style={{ color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}>
            Глава 02
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Эвакуация
          </h2>
          <p className="text-white/60 mt-4 text-base max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
            Великая Отечественная война поставила под угрозу не только студию, но и само существование советского кино.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden"
          style={{ minHeight: 300 }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(212,175,55,0.3) 28px, rgba(212,175,55,0.3) 29px)',
            }}
          />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex flex-col md:flex-row gap-0 overflow-hidden"
              style={{ border: '1px solid rgba(212,175,55,0.2)' }}
            >
              <div className="hidden md:block md:w-64 lg:w-80 flex-shrink-0 relative" style={{ minHeight: 280 }}>
                <img
                  src={slides[current].img}
                  alt={slides[current].title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: 'grayscale(80%) brightness(0.6)' }}
                />
              </div>
              <div className="p-8 md:p-10 flex-1">
              <div
                className="text-5xl md:text-7xl font-black mb-4 leading-none select-none"
                style={{ color: 'rgba(212,175,55,0.1)', fontFamily: 'Montserrat, sans-serif' }}
              >
                0{current + 1}
              </div>
              <h3
                className="text-xl md:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {slides[current].title}
              </h3>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                {slides[current].text}
              </p>
              <p className="text-sm" style={{ color: '#D4AF37', fontFamily: 'Inter, sans-serif' }}>
                {slides[current].detail}
              </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="flex items-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center transition-all duration-200 hover:opacity-80"
            style={{ border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}
            aria-label="Назад"
          >
            ←
          </button>

          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300"
                style={{
                  width: i === current ? 24 : 8,
                  height: 3,
                  background: i === current ? '#D4AF37' : 'rgba(212,175,55,0.3)',
                }}
                aria-label={`Слайд ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center transition-all duration-200 hover:opacity-80"
            style={{ border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}
            aria-label="Далее"
          >
            →
          </button>

          <span className="ml-auto text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Montserrat, sans-serif' }}>
            {current + 1} / {slides.length}
          </span>
        </div>
      </div>
    </section>
  );
}