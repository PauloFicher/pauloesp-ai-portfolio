const categories = [
  {
    name: 'Lenguajes y Frameworks',
    items: ['TypeScript', 'Python 3.12', 'React / Next.js 14', 'FastAPI', 'Node.js'],
  },
  {
    name: 'IA y LLMs',
    items: [
      'OpenAI API (GPT-4o)',
      'Anthropic API (Claude)',
      'DeepSeek API',
      'Groq (Qwen, Llama)',
      'RAG con pgvector',
      'Agentes Autonomos (MCP)',
      'n8n Automation',
    ],
  },
  {
    name: 'Infraestructura',
    items: [
      'Supabase (Auth, DB, Realtime)',
      'Vercel (Edge Functions)',
      'Docker & K8s',
      'Argo CD (GitOps)',
      'GitLab CI/CD',
    ],
  },
  {
    name: 'Tooling',
    items: ['pnpm (exclusivo)', 'OpenCode', 'Claude Code', 'DeepSeek Console', 'Codex / Hermes'],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="max-w-5xl mx-auto px-6 py-20 border-t border-wire">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-[-0.02em] mb-3">
          Stack Tecnologico
        </h2>
        <p className="text-ink-secondary max-w-xl mx-auto leading-relaxed">
          Tecnologias que uso para construir sistemas de automatizacion empresarial con IA.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <div key={cat.name} className="p-6 rounded-2xl border border-wire bg-surface">
            <h3 className="text-sm font-semibold text-brand mb-3">{cat.name}</h3>
            <ul className="space-y-1.5">
              {cat.items.map((item) => (
                <li key={item} className="text-sm text-ink-secondary flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand/30 shrink-0" />
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
