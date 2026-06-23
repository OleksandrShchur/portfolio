import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certifications } from '@/data/certifications';
import { usePrefersReducedMotion } from '@/hooks';
import { SectionWrapper } from '@/components/layout/SectionWrapper';

export function Certifications() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <SectionWrapper
      id="certifications"
      title="Certifications"
      subtitle="Validated expertise in Power Platform and automation."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.article
            key={cert.id}
            className="group rounded-2xl border border-violet-primary/20 bg-base-card/50 p-6 backdrop-blur-sm transition-all hover:border-violet-glow/50 hover:shadow-glow-sm"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-start justify-between">
              <Award className="h-5 w-5 text-violet-glow" />
              <span className="font-mono text-xs text-zinc-500">{cert.year}</span>
            </div>
            <h3 className="mt-4 font-mono text-xl font-bold text-violet-glow">{cert.code}</h3>
            <p className="mt-2 text-sm font-medium text-white">{cert.name}</p>
            <p className="mt-1 text-xs text-zinc-500">{cert.issuer}</p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
