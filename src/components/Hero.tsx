export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 mt-16">
      <div className="max-w-4xl text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-azeta-accent/20 bg-azeta-accent/5 text-azeta-accent text-sm">
          <span className="w-2 h-2 rounded-full bg-azeta-accent animate-pulse" />
          Disponible para roles senior de AI + Automatizacion
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
          Automatizacion
          <br />
          <span className="text-azeta-accent">con IA para empresas</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Construyo agentes con LLMs, pipelines RAG y herramientas de IA
          que entienden tu negocio. Especializado en retail, finanzas,
          telecomunicaciones e inmobiliario.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-azeta-accent text-azeta-primary rounded-full font-semibold hover:bg-azeta-accent/90 transition-all text-sm"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white/10 rounded-full text-white font-semibold hover:bg-white/5 transition-all text-sm"
          >
            Contactar
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {[
            { number: 'P1', label: 'Biggie Inventory Agent', cat: 'Retail' },
            { number: 'P2', label: 'Feedback Analyzer', cat: 'Servicios' },
            { number: 'P3', label: 'Onboarding OCR', cat: 'Finanzas' },
            { number: 'P4', label: 'Contract Intelligence', cat: 'Inmobiliario' },
          ].map((item) => (
            <a
              key={item.number}
              href={`#project-${item.number.toLowerCase()}`}
              className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
            >
              <span className="text-xs text-azeta-accent font-mono">{item.number}</span>
              <p className="text-sm text-white mt-1 group-hover:text-azeta-accent transition-colors">
                {item.label}
              </p>
              <span className="text-xs text-gray-500">{item.cat}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
