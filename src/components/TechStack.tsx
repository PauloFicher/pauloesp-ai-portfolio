const techCategories = [
  {
    name: 'Lenguajes y Frameworks',
    items: ['TypeScript', 'Python 3.12', 'React/Next.js 14', 'FastAPI', 'Node.js'],
  },
  {
    name: 'IA y LLMs',
    items: [
      'OpenAI API (GPT-4o, o1)',
      'Anthropic API (Claude)',
      'DeepSeek API',
      'LangChain',
      'MCP (Model Context Protocol)',
      'RAG con pgvector',
      'Agentes Autonomos',
    ],
  },
  {
    name: 'Infraestructura y DevOps',
    items: [
      'Supabase (Auth, DB, Realtime, pgvector)',
      'Vercel (Edge Functions)',
      'Docker & K8s',
      'Argo CD (GitOps)',
      'GitLab CI/CD',
    ],
  },
  {
    name: 'Automatizacion',
    items: [
      'n8n Workflows',
      'Power Automate',
      'Zapier',
      'WhatsApp Business API',
    ],
  },
  {
    name: 'Tooling',
    items: ['pnpm (exclusivo)', 'ESLint', 'Prettier', 'Vitest', 'Playwright'],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stack Tecnologico
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Herramientas y tecnologias que utilizo para construir sistemas de
          automatizacion empresarial con IA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((category) => (
          <div
            key={category.name}
            className="p-6 rounded-xl border border-white/5 bg-white/[0.01]"
          >
            <h3 className="text-sm font-semibold text-azeta-accent mb-4">
              {category.name}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item} className="text-sm text-gray-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-azeta-accent/30" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
