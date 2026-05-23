import type { Project } from '@/types';

const categoryNames: Record<string, string> = {
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
      id={`project-${project.id}`}
      className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-azeta-accent/20 transition-all group"
    >
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-azeta-accent/10 flex items-center justify-center text-azeta-accent font-mono text-sm font-bold">
              {project.id.toUpperCase()}
            </span>
            <div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <span className="text-xs text-azeta-accent">
                {project.azetaCompany} &middot; {categoryNames[project.category]}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label={`${project.title} GitHub`}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label={`${project.title} demo`}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Problema</p>
            <p className="text-sm text-gray-300 leading-relaxed">{project.problem}</p>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Solucion</p>
            <p className="text-sm text-gray-300 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Features principales</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
            {project.features.map((feature) => (
              <li key={feature} className="text-xs text-gray-400 flex items-start gap-2">
                <span className="text-azeta-accent mt-0.5">+</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] rounded-full bg-azeta-secondary text-gray-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
