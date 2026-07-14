import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { usePrefersReducedMotion } from '@/hooks';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ProjectCard } from '@/components/sections/ProjectCard';

export function Projects() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Selected personal and open-source projects."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
