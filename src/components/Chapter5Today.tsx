import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Chapter5Today() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

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
            Мосфильм сегодня — это живой организм площадью 35 гектаров с более чем вековой историей.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <motion.div
            className="flex-1 relative overflow-hidden"
            style={{ height: 500 }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div style={{ y: imgY, willChange: "transform" }} className="absolute inset-0 w-full h-full">
              <img
                src="https://www.mosfilm.ru/upload/iblock/2a3/ijmls8ikfi98jodsdrut8qb7uw85elit/Frame-118_min.png"
                alt="Мосфильм сегодня"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,27,61,0.3) 0%, transparent 60%)' }} />
            </motion.div>
          </motion.div>

          <div className="flex-1 lg:max-w-sm flex flex-col justify-between" style={{ minHeight: 500 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-base leading-relaxed mb-6" style={{ color: '#1E1E1E', fontFamily: 'Inter, sans-serif' }}>
                Сегодня на территории студии работают 17 съёмочных павильонов, реставрационный центр, музей кино, киноцентр и образовательные программы для режиссёров.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#555', fontFamily: 'Inter, sans-serif' }}>
                Мосфильм — первая российская студия, получившая сертификат Dolby Atmos® Premier Studio. Ежегодно здесь производится более 100 фильмов и сериалов.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {[
                { value: "35", label: "гектаров территории" },
                { value: "3 000+", label: "картин в архиве" },
                { value: "1 000+", label: "экспонатов в музее" },
                { value: "более 100", label: "лет истории" },
              ].map((stat) => (
                <div key={stat.label} className="p-4" style={{ background: '#f8f8f8', borderTop: '2px solid #D4AF37' }}>
                  <div className="text-xl font-black" style={{ color: '#0B1B3D', fontFamily: 'Montserrat, sans-serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs mt-1" style={{ color: '#888', fontFamily: 'Inter, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}