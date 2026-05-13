import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const zones = [
  {
    id: 1,
    label: "Павильон №1",
    x: "18%",
    y: "35%",
    description: "Крупнейший съёмочный павильон Европы — 3 000 м². Здесь снимались эпические сцены «Войны и мира» и десятки современных сериалов.",
  },
  {
    id: 2,
    label: "Музей кино",
    x: "52%",
    y: "22%",
    description: "Более 1 000 экспонатов: оригинальные костюмы, реквизит, камеры. Гордость музея — карета из «Войны и мира» и костюмы к «Бриллиантовой руке».",
  },
  {
    id: 3,
    label: "Киноцентр",
    x: "72%",
    y: "55%",
    description: "Современный медиа-комплекс с монтажными студиями, кинозалом и образовательными программами для молодых режиссёров.",
  },
  {
    id: 4,
    label: "Реставрационный центр",
    x: "35%",
    y: "68%",
    description: "Здесь возвращают к жизни советскую классику: оцифровка, цветокоррекция, восстановление звука. Сохранено более 3 000 картин.",
  },
];

export default function Chapter5Today() {
  const [activeZone, setActiveZone] = useState<number | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
  const mapY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      id="chapter5"
      ref={container}
      className="min-h-screen py-24 px-6 overflow-hidden"
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
            Глава 05
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-tight" style={{ color: '#0B1B3D', fontFamily: 'Montserrat, sans-serif' }}>
            Сегодня
          </h2>
          <p className="text-base mt-4 max-w-xl" style={{ color: '#555', fontFamily: 'Inter, sans-serif' }}>
            Мосфильм сегодня — это живой организм площадью 35 гектаров. Кликни на зону, чтобы узнать, что там происходит.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            className="flex-1 relative overflow-hidden"
            style={{ height: 420 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div style={{ y: mapY, willChange: "transform" }} className="absolute inset-0 w-full h-full">
              <img
                src="https://www.mosfilm.ru/upload/iblock/d33/93xmzwu4yv5acpv70okja9gxjy34r8m6/tg_image_3447924520_min.jpeg"
                alt="Карта Мосфильма"
                className="w-full h-full object-cover"
                style={{ filter: 'saturate(0.6) brightness(0.85)' }}
              />
              <div className="absolute inset-0" style={{ background: 'rgba(11,27,61,0.35)' }} />
            </motion.div>

            {zones.map((zone) => (
              <motion.button
                key={zone.id}
                className="absolute z-10 flex flex-col items-center"
                style={{ left: zone.x, top: zone.y, transform: 'translate(-50%, -50%)' }}
                onClick={() => setActiveZone(activeZone === zone.id ? null : zone.id)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ scale: activeZone === zone.id ? [1, 1.3, 1] : 1 }}
                  transition={{ repeat: activeZone === zone.id ? Infinity : 0, duration: 1.5 }}
                  className="w-4 h-4 rounded-full border-2"
                  style={{
                    background: activeZone === zone.id ? '#D4AF37' : 'rgba(212,175,55,0.6)',
                    borderColor: '#D4AF37',
                    boxShadow: activeZone === zone.id ? '0 0 12px rgba(212,175,55,0.8)' : 'none',
                  }}
                />
                <span
                  className="mt-1 text-white text-xs font-semibold px-1 text-center"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                    maxWidth: 80,
                    lineHeight: 1.2,
                  }}
                >
                  {zone.label}
                </span>
              </motion.button>
            ))}
          </motion.div>

          <div className="flex-1 lg:max-w-sm">
            <AnimatePresence mode="wait">
              {activeZone ? (
                <motion.div
                  key={activeZone}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6"
                  style={{
                    background: '#0B1B3D',
                    border: '1px solid rgba(212,175,55,0.3)',
                  }}
                >
                  <div
                    className="text-xs uppercase tracking-widest mb-3 font-semibold"
                    style={{ color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Зона {activeZone}
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-4"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {zones.find((z) => z.id === activeZone)?.label}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {zones.find((z) => z.id === activeZone)?.description}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6"
                  style={{
                    border: '1px dashed rgba(11,27,61,0.2)',
                    color: '#888',
                  }}
                >
                  <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    ← Нажми на любую точку на карте, чтобы узнать больше о каждой зоне студии.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: "35", label: "гектаров территории" },
                { value: "3 000+", label: "картин в архиве" },
                { value: "1 000+", label: "экспонатов в музее" },
                { value: "100+", label: "лет истории" },
              ].map((stat) => (
                <div key={stat.label} className="p-4" style={{ background: '#f8f8f8', borderTop: '2px solid #D4AF37' }}>
                  <div className="text-2xl font-black" style={{ color: '#0B1B3D', fontFamily: 'Montserrat, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs mt-1" style={{ color: '#888', fontFamily: 'Inter, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}