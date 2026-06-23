import { FolderGit2 } from 'lucide-react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';

const placeholderCards = [1, 2, 3];

export function ProjectsPlaceholder() {
  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Coming soon — selected work will appear here"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {placeholderCards.map((card) => (
          <div
            key={card}
            className="flex min-h-[200px] flex-col items-center justify-center rounded-2xl border border-dashed border-violet-primary/20 bg-base-card/30 p-6 backdrop-blur-sm"
          >
            <FolderGit2 className="h-8 w-8 text-violet-primary/40" aria-hidden />
            <p className="mt-4 font-mono text-xs text-zinc-600">project_slot_{card}</p>
            <div className="mt-4 h-2 w-3/4 rounded bg-white/5" />
            <div className="mt-2 h-2 w-1/2 rounded bg-white/5" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
