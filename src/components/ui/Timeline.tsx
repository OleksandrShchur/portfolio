import { motion } from 'framer-motion';
import type { ExperienceEntry } from '@/data/experience';
import { Badge } from './Badge';
import { usePrefersReducedMotion } from '@/hooks';

interface TimelineProps {
  entries: ExperienceEntry[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export function Timeline({ entries }: TimelineProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.ol
      className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-violet-primary before:via-violet-glow/40 before:to-transparent md:before:left-1/2 md:before:-translate-x-px"
      variants={prefersReducedMotion ? undefined : containerVariants}
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'visible'}
      viewport={{ once: true, margin: '-80px' }}
    >
      {entries.map((entry, index) => (
        <motion.li
          key={entry.id}
          className={`relative md:grid md:grid-cols-2 md:gap-8 ${
            index % 2 === 0 ? '' : 'md:[&>div:first-child]:order-2'
          }`}
          variants={prefersReducedMotion ? undefined : itemVariants}
        >
          <div className="mb-4 flex items-start gap-4 md:mb-0 md:justify-end md:text-right">
            <span
              className="relative z-10 mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-violet-primary bg-base shadow-glow-sm md:absolute md:left-1/2 md:mt-0 md:-translate-x-1/2"
              aria-hidden
            >
              <span className="h-2 w-2 rounded-full bg-violet-glow" />
            </span>
            <div className="md:pr-8">
              <p className="font-mono text-sm text-violet-glow">{entry.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{entry.role}</h3>
              <p className="text-violet-primary">{entry.company}</p>
            </div>
          </div>

          <div className="ml-10 rounded-2xl border border-white/10 bg-base-card/50 p-6 backdrop-blur-sm md:ml-0 md:pl-8">
            <p className="text-sm font-medium text-zinc-300">
              <span className="font-mono text-violet-glow">project //</span> {entry.project}
            </p>

            <div className="mt-4">
              <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                Responsibilities
              </h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                {entry.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {entry.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            <p className="mt-4 font-mono text-xs text-zinc-500">
              team_size: {entry.teamSize}
            </p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
