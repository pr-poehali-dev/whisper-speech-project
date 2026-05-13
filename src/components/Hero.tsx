import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      id="hero"
    >
      <motion.div
        style={{ y, willChange: "transform" }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://storage.yandexcloud.net/moskvichmag/uploads/2022/08/mosfilm1.jpg"
          alt="Мосфильм — панорама студии"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(11,27,61,0.65) 0%, rgba(11,27,61,0.45) 50%, rgba(11,27,61,0.75) 100%)' }} />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest mb-6"
          style={{ color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}
        >
          Мосфильм: кино, которое пережило эпоху
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-tight"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          100 лет назад здесь был лес,<br />
          <span style={{ color: '#D4AF37' }}>а теперь — киновселенная</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-base md:text-lg max-w-2xl mx-auto opacity-80 leading-relaxed mb-10"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          В 1924 году на пустыре у Воробьёвых гор начали строить фабрику грёз. Сегодня Мосфильм — легендарная киностудия и живая история советского и российского кино.
        </motion.p>

        <motion.a
          href="#toc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#toc')?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-8 py-3 text-sm uppercase tracking-widest font-semibold cursor-pointer transition-all duration-300"
          style={{
            background: '#D4AF37',
            color: '#0B1B3D',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Читать дальше
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 opacity-40" style={{ background: '#D4AF37' }} />
        <span className="text-white/40 text-xs uppercase tracking-widest">Скролл</span>
      </motion.div>
    </div>
  );
}