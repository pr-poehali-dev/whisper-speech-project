import { motion } from "framer-motion";

const events = [
  {
    year: "1985",
    title: "Пик советского кино",
    text: "Мосфильм на подъёме: более 25 фильмов в год, полные павильоны, тысячи сотрудников. «Москва слезам не верит» только что взяла «Оскар». Студия — сердце советской культуры.",
  },
  {
    year: "1991",
    title: "Распад СССР",
    text: "За одну ночь рухнула система государственного финансирования кино. Госзаказ исчез, зарплаты задерживались месяцами. Павильоны пустели. Часть оборудования распродавалась за бесценок.",
  },
  {
    year: "1995",
    title: "На грани",
    text: "Всего 3 фильма за год — абсолютный антирекорд. Студия выживала сдачей площадей в аренду: в павильонах открывались склады и офисы. Многие режиссёры уехали за рубеж.",
  },
  {
    year: "1998",
    title: "Новый курс",
    text: "Карен Шахназаров возглавил Мосфильм. Новая стратегия: коммерческие съёмки, реставрация архива, привлечение частных продюсеров. Студия начала медленно возрождаться.",
  },
  {
    year: "2005",
    title: "Возрождение",
    text: "12 фильмов в год — скромно, но уверенно. Реставрационный центр оцифровал сотни картин советской эпохи. Мосфильм снова стал привлекательным для продюсеров.",
  },
];

export default function Chapter4Perestroika() {
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
              className="mb-14"
            >
              <div className="text-xs uppercase tracking-widest mb-3 font-semibold" style={{ color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}>
                Глава 04
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Перестройка
              </h2>
              <p className="text-white/60 mt-4 text-base max-w-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                Распад СССР стал самым тяжёлым испытанием за всю историю студии. Но Мосфильм выжил.
              </p>
            </motion.div>

            <div className="relative pl-8" style={{ borderLeft: '1px solid rgba(212,175,55,0.2)' }}>
              {events.map((ev, i) => (
                <motion.div
                  key={ev.year}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="mb-10 relative"
                >
                  <div
                    className="absolute -left-[2.15rem] top-1 w-3 h-3 rounded-full border-2"
                    style={{ background: '#0B1B3D', borderColor: '#D4AF37' }}
                  />
                  <div
                    className="text-xs font-bold mb-1 tracking-widest"
                    style={{ color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {ev.year}
                  </div>
                  <h3
                    className="text-base md:text-lg font-bold text-white mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {ev.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {ev.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 lg:max-w-md lg:sticky lg:top-24"
          >
            <div className="relative overflow-hidden" style={{ height: 520 }}>
              <img
                src="https://www.mosfilm.ru/upload/iblock/d33/93xmzwu4yv5acpv70okja9gxjy34r8m6/tg_image_3447924520_min.jpeg"
                alt="Мосфильм в период перестройки"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(40%) brightness(0.75)' }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,27,61,0.85) 0%, transparent 50%)' }} />
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  className="text-white/40 text-xs uppercase tracking-wider mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Мосфильм сегодня
                </p>
                <p
                  className="text-white text-sm leading-relaxed"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Студия не только выжила — она стала современным медиакомплексом, сохранив дух легендарной эпохи.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { val: "1998", label: "год перелома" },
                { val: "17", label: "павильонов" },
                { val: "2 500+", label: "картин в фонде" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-4 text-center"
                  style={{ background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.15)' }}
                >
                  <div className="text-xl font-black" style={{ color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}>
                    {s.val}
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
