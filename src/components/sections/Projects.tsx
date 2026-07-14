import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Github, Lock } from 'lucide-react';
import { projects } from '@/data/projects';
import { usePrefersReducedMotion } from '@/hooks';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';

const MAX_VISIBLE_BADGES = 5;

export function Projects() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Selected personal and open-source projects."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const visibleStack = project.techStack.slice(0, MAX_VISIBLE_BADGES);
          const hiddenCount = project.techStack.length - visibleStack.length;

          return (
            <motion.div
              key={project.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-primary/30 bg-violet-primary/10">
                    <FolderGit2 className="h-5 w-5 text-violet-glow" />
                  </div>
                  <div className="flex shrink-0 gap-2">
                    {project.isPrivate && !project.githubUrl && (
                      <span
                        title="Private repository"
                        className="rounded-lg border border-violet-primary/20 p-2 text-zinc-500"
                        aria-label="Private repository"
                      >
                        <Lock className="h-4 w-4" />
                      </span>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="rounded-lg border border-violet-primary/20 p-2 text-zinc-400 transition-colors hover:border-violet-glow/50 hover:text-violet-glow"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={
                          project.isPrivate
                            ? `View Telegram channel for ${project.title}`
                            : `View live demo of ${project.title}`
                        }
                        className="rounded-lg border border-violet-primary/20 p-2 text-zinc-400 transition-colors hover:border-violet-glow/50 hover:text-violet-glow"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mt-4 font-mono text-xl font-bold text-violet-glow">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {visibleStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                  {hiddenCount > 0 && <Badge>+{hiddenCount}</Badge>}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
