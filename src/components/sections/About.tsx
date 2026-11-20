import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { usePrefersReducedMotion } from '@/hooks';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';

export function About() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="Engineer at the intersection of cloud, enterprise systems, and polished user experiences."
    >
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg leading-relaxed text-zinc-300">{profile.summary}</p>

          <div className="mt-8">
            <h3 className="font-mono text-sm uppercase tracking-wider text-violet-glow">
              Key Strengths
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {profile.strengths.map((strength) => (
                <li
                  key={strength}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-base-card/50 px-4 py-3 text-sm text-zinc-200"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-glow" />
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 border-l-2 border-violet-primary/50 pl-4 text-sm italic text-zinc-400">
            {profile.personalTouch}
          </p>
        </motion.div>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {profile.stats.map((stat, index) => (
              <GlassCard key={stat.label} className="p-4 text-center">
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
                  whileInView={
                    prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }
                  }
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-2xl font-bold text-violet-glow sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                    {stat.label}
                  </p>
                </motion.div>
              </GlassCard>
            ))}
          </div>

          <GlassCard>
            <h3 className="font-mono text-sm uppercase tracking-wider text-violet-glow">
              Languages
            </h3>
            <ul className="mt-3 space-y-2">
              {profile.languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex justify-between text-sm text-zinc-300"
                >
                  <span>{lang.name}</span>
                  <span className="font-mono text-zinc-400">{lang.level}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </SectionWrapper>
  );
}
