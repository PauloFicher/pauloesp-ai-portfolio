import { projects } from '@/lib/projects-data';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid() {
  return (
    <section id="proyectos" className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-[-0.02em] mb-3">
          Proyectos de Automatizacion con IA
        </h2>
        <p className="text-ink-secondary max-w-xl mx-auto leading-relaxed">
          Cuatro sistemas disenados para problemas reales de cada vertical
          del Grupo Azeta: retail, finanzas, telecomunicaciones e inmobiliario.
        </p>
      </div>

      <div className="space-y-10">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="slide-up"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
