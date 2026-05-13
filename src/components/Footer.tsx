export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div
            className="py-4 sm:py-6 lg:py-8 px-6 h-full w-full flex flex-col justify-between"
            style={{ background: '#0B1B3D' }}
          >
            <div className="flex shrink-0 gap-10 sm:gap-16 lg:gap-24">
              <div className="flex flex-col gap-2">
                <h3
                  className="mb-2 uppercase text-xs sm:text-sm font-semibold tracking-wider"
                  style={{ color: '#D4AF37', fontFamily: 'Montserrat, sans-serif' }}
                >
                  Главы
                </h3>
                {[
                  { label: 'Рождение', href: '#chapter1' },
                  { label: 'Эвакуация', href: '#chapter2' },
                  { label: 'Золотой век', href: '#chapter3' },
                  { label: 'Перестройка', href: '#chapter4' },
                  { label: 'Сегодня', href: '#chapter5' },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>


            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <h1
                className="text-[9vw] sm:text-[8vw] lg:text-[7vw] leading-[1] mt-4 sm:mt-6 lg:mt-10 font-black tracking-tight"
                style={{ color: '#D4AF37', fontFamily: 'Montserrat, sans-serif', opacity: 0.9 }}
              >
                Мосфильм: кино,<br />которое пережило эпоху
              </h1>
              <p
                className="text-white/40 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                1924 — {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}