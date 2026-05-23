const NAV = [
  { label: 'Proyectos', link: '#proyectos' },
  { label: 'Stack', link: '#stack' },
  { label: 'Contacto', link: '#contacto' },
];

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 h-12 rounded-full glass-subtle shadow-sm">
      <div className="h-full flex items-center gap-4 md:gap-8 px-5 md:px-8">
        <a href="/" className="text-sm font-semibold text-ink tracking-tight">
          Paulo Espinola
        </a>
        <span className="w-px h-4 bg-wire" />
        {NAV.map(({ label, link }) => (
          <a
            key={link}
            href={link}
            className="text-[13px] md:text-sm font-medium text-ink-secondary hover:text-ink transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}
