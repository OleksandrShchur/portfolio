import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, FolderGit2, Github, Lock } from 'lucide-react';
import type { Project } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';

const MAX_VISIBLE_BADGES = 5;

interface ProjectCardProps {
  project: Project;
}

interface StackToggleProps {
  expanded: boolean;
  hiddenCount: number;
  onToggle: () => void;
}

function StackToggle({ expanded, hiddenCount, onToggle }: StackToggleProps) {
  return (
    <button
      type="button"
      className="mt-2 inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-violet-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow"
      aria-expanded={expanded}
      aria-label={
        expanded ? 'Show fewer technologies' : `Show ${hiddenCount} more technologies`
      }
      onClick={onToggle}
    >
      {expanded ? (
        <>
          <ChevronUp className="h-4 w-4" aria-hidden />
          Show less
        </>
      ) : (
        <>
          <ChevronDown className="h-4 w-4" aria-hidden />
          +{hiddenCount}
        </>
      )}
    </button>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const hasOverflow = project.techStack.length > MAX_VISIBLE_BADGES;
  const hiddenCount = project.techStack.length - MAX_VISIBLE_BADGES;
  const visibleStack = project.techStack.slice(0, MAX_VISIBLE_BADGES);
  const displayedStack = expanded ? project.techStack : visibleStack;

  return (
    <GlassCard className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <div
          title={project.title}
          aria-label={project.title}
          className="flex h-10 w-10 shrink-0 cursor-default items-center justify-center rounded-xl border border-violet-primary/30 bg-violet-primary/10 opacity-80"
        >
          <FolderGit2 className="h-5 w-5 text-violet-glow" aria-hidden />
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
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>

      <div className="mt-4">
        <div className="flex flex-wrap gap-2">
          {displayedStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        {hasOverflow && (
          <StackToggle
            expanded={expanded}
            hiddenCount={hiddenCount}
            onToggle={() => setExpanded((value) => !value)}
          />
        )}
      </div>
    </GlassCard>
  );
}
