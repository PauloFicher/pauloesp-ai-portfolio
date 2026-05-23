import { projects } from '@/lib/projects-data';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Proyectos de Automatizacion con IA
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Cuatro sistemas de IA disenados para resolver problemas reales de
          cada vertical del Grupo Azeta. Desde retail y finanzas hasta
          inmobiliario y atencion al cliente.
        </p>
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
