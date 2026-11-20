import { motion } from 'framer-motion';
import { Briefcase, Calendar, Users } from 'lucide-react';
import type { ExperienceEntry } from '@/data/experience';
import { Badge } from './Badge';
import { GlassCard } from './GlassCard';
import { usePrefersReducedMotion } from '@/hooks';

interface TimelineProps {
  entries: ExperienceEntry[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' as const },
  },
};

export function Timeline({ entries }: TimelineProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.ol
      className="relative space-y-8 before:absolute before:bottom-3 before:left-[17px] before:top-3 before:w-0.5 before:bg-gradient-to-b before:from-violet-primary before:via-violet-glow/50 before:to-transparent sm:before:left-[21px]"
      variants={prefersReducedMotion ? undefined : containerVariants}
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      viewport={{ once: true, margin: '-60px' }}
    >
      {entries.map((entry) => (
        <motion.li
          key={entry.id}
          className="relative pl-10 sm:pl-12"
          variants={prefersReducedMotion ? undefined : itemVariants}
        >
          {/* Timeline node icon */}
          <span
            className="absolute left-0 top-1.5 flex h-9 w-9 items-center justify-center rounded-xl border border-violet-primary/50 bg-base-card shadow-glow-sm transition-transform duration-200 hover:scale-110 sm:h-11 sm:w-11"
            aria-hidden
          >
            <Briefcase className="h-4 w-4 text-violet-glow sm:h-5 sm:w-5" />
          </span>

          <GlassCard className="transition-all hover:border-violet-glow/40">
            {/* Header: Role, Company & Period */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold text-white">{entry.role}</h3>
                  <span className="rounded-full border border-violet-primary/30 bg-violet-primary/10 px-2.5 py-0.5 font-mono text-xs text-violet-glow">
                    {entry.company}
                  </span>
                </div>
                <p className="mt-1 font-mono text-xs text-zinc-400">
                  <span className="text-violet-glow">project //</span> {entry.project}
                </p>
              </div>

              <div className="flex items-center gap-3 self-start font-mono text-xs text-zinc-400 sm:self-auto">
                <span className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1">
                  <Calendar className="h-3.5 w-3.5 text-violet-glow" />
                  {entry.period}
                </span>
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="mt-5 border-t border-white/5 pt-4">
              <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                Key Contributions & Architecture
              </h4>
              <ul className="mt-2.5 space-y-2 text-sm text-zinc-300">
                {entry.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-glow" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips & Team Size */}
            <div className="mt-5 flex flex-col gap-3 border-t border-white/5 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-1.5">
                {entry.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="flex shrink-0 items-center gap-1.5 font-mono text-xs text-zinc-400">
                <Users className="h-3.5 w-3.5 text-violet-glow" />
                <span>{entry.teamSize}</span>
              </div>
            </div>
          </GlassCard>
        </motion.li>
      ))}
    </motion.ol>
  );
}
