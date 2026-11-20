import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { projects, type ProjectCategory } from '@/data/projects';
import { usePrefersReducedMotion } from '@/hooks';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { ProjectCard } from '@/components/sections/ProjectCard';

interface ProjectsProps {
  activeSkill?: string | null;
  onClearSkillFilter?: () => void;
  onSelectSkill?: (skill: string) => void;
}

const categories: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Fullstack & CRM' },
  { id: 'frontend', label: 'Frontend & TMA' },
  { id: 'cloud-bot', label: 'Cloud & Bots' },
];

export function Projects({
  activeSkill,
  onClearSkillFilter,
  onSelectSkill,
}: ProjectsProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;
      const matchesSkill =
        !activeSkill ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(activeSkill.toLowerCase()),
        );
      return matchesCategory && matchesSkill;
    });
  }, [selectedCategory, activeSkill]);

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Selected production systems, Telegram Mini Apps, enterprise tools, and open-source solutions."
    >
      {/* Category Tabs & Filter Indicators */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-xl px-3.5 py-1.5 font-mono text-xs font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow ${
                selectedCategory === cat.id
                  ? 'bg-violet-primary text-white shadow-glow-sm'
                  : 'border border-white/10 bg-white/5 text-zinc-400 hover:border-violet-primary/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Active Skill Filter Badge */}
        {activeSkill && (
          <div className="flex items-center gap-2 self-start rounded-xl border border-violet-glow/40 bg-violet-primary/20 px-3 py-1.5 text-xs text-white">
            <span className="font-mono text-violet-glow">Filter:</span>
            <span className="font-semibold">{activeSkill}</span>
            {onClearSkillFilter && (
              <button
                type="button"
                onClick={onClearSkillFilter}
                className="ml-1 rounded p-0.5 text-zinc-400 hover:text-white"
                aria-label="Clear active skill filter"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Projects Grid with layout animation */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.length === 0 ? (
            <div className="col-span-full py-16 text-center">
              <p className="text-zinc-400">
                No projects found matching the current filter.
              </p>
              {activeSkill && onClearSkillFilter && (
                <button
                  type="button"
                  onClick={onClearSkillFilter}
                  className="mt-3 inline-flex items-center gap-2 rounded-xl border border-violet-primary/40 bg-violet-primary/10 px-4 py-2 font-mono text-xs text-violet-glow hover:bg-violet-primary/20"
                >
                  <X className="h-3.5 w-3.5" />
                  Clear Skill Filter
                </button>
              )}
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProjectCard
                  project={project}
                  onSelectSkill={onSelectSkill}
                  activeSkill={activeSkill}
                />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
