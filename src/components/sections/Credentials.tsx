import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { certifications } from '@/data/certifications';
import { education } from '@/data/education';
import { usePrefersReducedMotion } from '@/hooks';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';

export function Credentials() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <SectionWrapper
      id="credentials"
      title="Credentials & Education"
      subtitle="Academic Computer Science foundation and certified professional competencies."
      className="pb-6 md:pb-8"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Education Column */}
        <div id="education" className="scroll-mt-28 space-y-4">
          <div className="mb-2 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-violet-glow" />
            <h3 className="font-mono text-base font-semibold uppercase tracking-wider text-white">
              Education
            </h3>
          </div>

          {education.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="rounded-full border border-violet-primary/30 bg-violet-primary/10 px-2.5 py-0.5 font-mono text-xs text-violet-glow">
                      {entry.period}
                    </span>
                    <h4 className="mt-2 text-lg font-semibold text-white">
                      {entry.degree}
                    </h4>
                    <p className="mt-1 text-sm text-zinc-300">{entry.institution}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Certifications Column */}
        <div id="certifications" className="scroll-mt-28 space-y-4">
          <div className="mb-2 flex items-center gap-2">
            <Award className="h-5 w-5 text-violet-glow" />
            <h3 className="font-mono text-base font-semibold uppercase tracking-wider text-white">
              Certifications
            </h3>
          </div>

          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-base font-bold text-violet-glow">
                        {cert.code}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-xs text-zinc-400">
                        {cert.year}
                      </span>
                    </div>
                    <h4 className="mt-2 text-sm font-semibold text-white">{cert.name}</h4>
                    <p className="mt-1 font-mono text-xs text-zinc-400">{cert.issuer}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
