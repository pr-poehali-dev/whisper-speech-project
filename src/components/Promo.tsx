import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      id="finale"
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y, willChange: "transform" }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/ca3d42f6-d34b-4d20-8a83-e2dbf1c5b042/files/8ba0a501-4708-485b-b46a-6c133b07e568.jpg"
            alt="Рабочий и Колхозница"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(11,27,61,0.5) 0%, rgba(11,27,61,0.65) 100%)' }}
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-xs uppercase tracking-widest mb-8"
          style={{ color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}
        >
          Эпилог
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl leading-snug font-bold"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Сто лет Мосфильм остаётся местом,<br />
          где мечты превращаются в кадры.<br />
          <span style={{ color: '#D4AF37' }}>И похоже, это только начало.</span>
        </motion.p>
      </div>
    </div>
  );
}