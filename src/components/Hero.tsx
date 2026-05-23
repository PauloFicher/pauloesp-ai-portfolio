export default function Hero() {
  const words = 'Automatizacion con IA para empresas'.split(' ');

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 bg-canvas">
      <div className="mx-auto max-w-4xl px-6 w-full text-center">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-8 rounded-full border border-brand-light bg-brand-light/50">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          <span className="text-[13px] font-medium text-brand">
            Postulacion Grupo Azeta
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-ink leading-[1.05] tracking-[-0.03em]">
          {['Paulo Espinola', 'AI Automation', 'Specialist'].map((line, i) => (
            <span key={line} className="block">
              {i === 1 ? (
                <span className="text-brand blur-reveal" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
                  {line}
                </span>
              ) : i === 0 ? (
                <span>
                  {line.split('').map((char, j) => (
                    <span
                      key={j}
                      className="blur-reveal inline-block"
                      style={{ animationDelay: `${0.05 + j * 0.03}s` }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </span>
              ) : (
                <span
                  className="blur-reveal text-ink-secondary font-light"
                  style={{ animationDelay: `${0.5 + i * 0.08}s` }}
                >
                  {line}
                </span>
              )}
            </span>
          ))}
        </h1>

        <p
          className="mt-6 max-w-xl mx-auto text-lg text-ink-secondary leading-relaxed slide-up"
          style={{ animationDelay: '0.6s' }}
        >
          Construyo agentes con LLMs, pipelines RAG y herramientas de IA
          para resolver problemas reales en retail, finanzas, telecom e
          inmobiliario. Mas de 5 anos de experiencia en produccion.
        </p>

        <div
          className="mt-8 flex items-center justify-center gap-3 slide-up"
          style={{ animationDelay: '0.75s' }}
        >
          <a href="#proyectos" className="btn-primary">
            Ver proyectos
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 7H7m10 0v10" />
            </svg>
          </a>
          <a href="#contacto" className="btn-secondary">
            Contactar
          </a>
        </div>

        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-left slide-up"
          style={{ animationDelay: '0.85s' }}
        >
          {[
            { id: 'P1', label: 'Biggie Inventory Agent', cat: 'Retail' },
            { id: 'P2', label: 'Feedback Analyzer', cat: 'Multi-empresa' },
            { id: 'P3', label: 'Onboarding OCR', cat: 'Finanzas' },
            { id: 'P4', label: 'Contract Intelligence', cat: 'Inmobiliario' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#proyecto-${item.id.toLowerCase()}`}
              className="p-4 rounded-2xl border border-wire bg-surface hover:shadow-sm transition-all hover:-translate-y-0.5"
            >
              <span className="text-[11px] font-semibold text-brand font-mono tracking-wider">
                {item.id}
              </span>
              <p className="text-sm font-medium text-ink mt-1 group-hover:text-brand transition-colors">
                {item.label}
              </p>
              <span className="text-[12px] text-ink-tertiary">{item.cat}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
