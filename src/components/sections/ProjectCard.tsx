import { useState } from 'react';
import { ExternalLink, FolderGit2, Github, Info, Lock, Sparkles } from 'lucide-react';
import type { Project } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';

interface ProjectCardProps {
  project: Project;
  onSelectSkill?: (skill: string) => void;
  activeSkill?: string | null;
}

export function ProjectCard({ project, onSelectSkill, activeSkill }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'highlights'>('overview');

  return (
    <GlassCard className="flex h-full flex-col justify-between transition-all hover:border-violet-glow/40">
      <div>
        {/* Top Bar: Icon, Badges, Links */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div
              title={project.title}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-primary/30 bg-violet-primary/10"
            >
              <FolderGit2 className="h-5 w-5 text-violet-glow" aria-hidden />
            </div>
            {project.badge && (
              <span className="rounded-full border border-violet-primary/30 bg-violet-primary/15 px-2.5 py-0.5 font-mono text-[11px] font-medium text-violet-glow">
                {project.badge}
              </span>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-1.5">
            {project.isPrivate && !project.githubUrl && (
              <span
                title="Private repository"
                className="rounded-lg border border-white/10 p-2 text-zinc-500"
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
                className="rounded-lg border border-white/10 p-2 text-zinc-400 transition-colors hover:border-violet-glow/50 hover:bg-violet-primary/20 hover:text-white"
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
                  project.liveUrl.includes('t.me')
                    ? `View Telegram for ${project.title}`
                    : `View live demo of ${project.title}`
                }
                className="rounded-lg border border-white/10 p-2 text-zinc-400 transition-colors hover:border-violet-glow/50 hover:bg-violet-primary/20 hover:text-white"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Tab Switcher */}
        <h3 className="mt-4 font-mono text-xl font-bold tracking-tight text-white">
          {project.title}
        </h3>

        {/* Tab switcher if highlights exist */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-3 flex gap-2 border-b border-white/5 pb-2">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-1.5 font-mono text-xs transition-colors ${
                activeTab === 'overview'
                  ? 'font-semibold text-violet-glow'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Info className="h-3 w-3" />
              Overview
            </button>
            <span className="text-zinc-600">/</span>
            <button
              type="button"
              onClick={() => setActiveTab('highlights')}
              className={`flex items-center gap-1.5 font-mono text-xs transition-colors ${
                activeTab === 'highlights'
                  ? 'font-semibold text-violet-glow'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Sparkles className="h-3 w-3" />
              Highlights
            </button>
          </div>
        )}

        {/* Content Pane */}
        <div className="mt-3 min-h-[72px]">
          {activeTab === 'overview' ? (
            <p className="text-sm leading-relaxed text-zinc-300">{project.description}</p>
          ) : (
            <ul className="space-y-1.5 text-xs text-zinc-300">
              {project.highlights?.map((h) => (
                <li key={h} className="flex items-start gap-1.5">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-violet-glow" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Tech Stack Badges */}
      <div className="mt-5 border-t border-white/5 pt-3">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => {
            const isMatch =
              activeSkill && tech.toLowerCase() === activeSkill.toLowerCase();
            return (
              <button
                key={tech}
                type="button"
                onClick={() => onSelectSkill && onSelectSkill(tech)}
                className={`transition-transform hover:scale-105 ${
                  isMatch ? 'rounded-md ring-2 ring-violet-glow' : ''
                }`}
              >
                <Badge variant={isMatch ? 'primary' : 'default'}>{tech}</Badge>
              </button>
            );
          })}
        </div>
      </div>
    </GlassCard>
  );
}
