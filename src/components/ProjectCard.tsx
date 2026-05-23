import type { Project } from '@/types';

const categories: Record<string, string> = {
  retail: 'Retail',
  finanzas: 'Finanzas',
  telecom: 'Telecom',
  inmobiliario: 'Inmobiliario',
};

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article
      id={`proyecto-${project.id}`}
      className="rounded-2xl border border-wire bg-surface overflow-hidden transition-all hover:shadow-sm hover:-translate-y-0.5"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand font-mono text-sm font-bold">
              {project.id.toUpperCase()}
            </span>
            <div>
              <h3 className="text-lg font-bold text-ink">{project.title}</h3>
              <span className="text-[13px] text-ink-secondary">
                {project.azetaCompany} &middot; {categories[project.category]}
              </span>
            </div>
          </div>
        </div>

        <p className="text-sm text-ink-secondary leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold text-ink-tertiary uppercase tracking-wider">
              Problema
            </p>
            <p className="text-[14px] text-ink-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold text-ink-tertiary uppercase tracking-wider">
              Solucion
            </p>
            <p className="text-[14px] text-ink-secondary leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-[11px] font-semibold text-ink-tertiary uppercase tracking-wider mb-2">
            Funcionalidades principales
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
            {project.features.map((f) => (
              <li key={f} className="text-[13px] text-ink-secondary flex items-start gap-2">
                <span className="text-brand font-bold mt-0.5">+</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] rounded-full bg-canvas text-ink-secondary border border-wire font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-wire flex flex-wrap items-center gap-4">
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-secondary hover:text-ink transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brand hover:text-[#0077ed] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Demo en vivo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
