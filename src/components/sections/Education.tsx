import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '@/data/education';
import { usePrefersReducedMotion } from '@/hooks';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';

export function Education() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <SectionWrapper id="education" title="Education" subtitle="Computer Science foundation from Chernivtsi National University.">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="h-full">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-primary/30 bg-violet-primary/10">
                  <GraduationCap className="h-6 w-6 text-violet-glow" />
                </div>
                <div>
                  <p className="font-mono text-sm text-violet-glow">{entry.period}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{entry.degree}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{entry.institution}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
