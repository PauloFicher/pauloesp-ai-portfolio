import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import TechStack from '@/components/TechStack';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsGrid />
      <TechStack />
      <ContactSection />
    </>
  );
}
