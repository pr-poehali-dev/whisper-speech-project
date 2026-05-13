export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div
          className="text-white text-sm uppercase tracking-widest font-semibold"
          style={{ fontFamily: 'Montserrat, sans-serif', color: '#D4AF37' }}
        >
          Мосфильм
        </div>
        <nav className="hidden md:flex gap-8">
          {[
            { label: 'Рождение', href: '#chapter1' },
            { label: 'Эвакуация', href: '#chapter2' },
            { label: 'Золотой век', href: '#chapter3' },
            { label: 'Сегодня', href: '#chapter5' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-white transition-colors duration-300 uppercase text-xs tracking-wider"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
