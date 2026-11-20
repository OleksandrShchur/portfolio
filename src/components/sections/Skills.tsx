import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';
import { usePrefersReducedMotion } from '@/hooks';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';

interface SkillsProps {
  activeSkill?: string | null;
  onSelectSkill?: (skill: string) => void;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const badgeContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export function Skills({ activeSkill, onSelectSkill }: SkillsProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const primary = skillCategories.filter((c) => c.variant === 'primary');
  const secondary = skillCategories.filter((c) => c.variant !== 'primary');

  const handleSkillClick = (skill: string) => {
    if (!onSelectSkill) return;
    onSelectSkill(skill);
  };

  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="Technologies and practices proven in production systems — grouped by domain."
    >
      <div className="mb-6 flex items-center justify-between">
        <p className="font-mono text-xs text-zinc-400">
          💡 <span className="text-violet-glow">Pro tip:</span> Click any skill badge to
          filter corresponding projects
        </p>
      </div>

      <motion.div
        className="space-y-10"
        variants={prefersReducedMotion ? undefined : containerVariants}
        initial={prefersReducedMotion ? false : 'hidden'}
        whileInView={prefersReducedMotion ? undefined : 'visible'}
        viewport={{ once: true, margin: '-60px' }}
      >
        <div>
          <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-violet-glow">
            Core Specialties
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {primary.map((category) => (
              <motion.div
                key={category.id}
                variants={prefersReducedMotion ? undefined : cardVariants}
              >
                <GlassCard>
                  <h4 className="font-semibold text-white">{category.title}</h4>
                  <motion.div
                    className="mt-4 flex flex-wrap gap-2"
                    variants={prefersReducedMotion ? undefined : badgeContainerVariants}
                  >
                    {category.skills.map((skill) => {
                      const isSelected =
                        activeSkill &&
                        skill.toLowerCase().includes(activeSkill.toLowerCase());
                      return (
                        <motion.button
                          key={skill}
                          type="button"
                          onClick={() => handleSkillClick(skill)}
                          variants={prefersReducedMotion ? undefined : badgeVariants}
                          className={`text-left transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-glow ${
                            isSelected ? 'rounded-md ring-2 ring-violet-glow' : ''
                          }`}
                        >
                          <Badge variant={isSelected ? 'primary' : 'default'}>
                            {skill}
                          </Badge>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-zinc-400">
            Databases, Architecture & Tooling
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {secondary.map((category) => (
              <motion.div
                key={category.id}
                variants={prefersReducedMotion ? undefined : cardVariants}
              >
                <GlassCard hover={true} className="h-full p-5">
                  <h4 className="text-sm font-semibold text-zinc-200">
                    {category.title}
                  </h4>
                  <motion.div
                    className="mt-3 flex flex-wrap gap-2"
                    variants={prefersReducedMotion ? undefined : badgeContainerVariants}
                  >
                    {category.skills.map((skill) => {
                      const isSelected =
                        activeSkill &&
                        skill.toLowerCase().includes(activeSkill.toLowerCase());
                      return (
                        <motion.button
                          key={skill}
                          type="button"
                          onClick={() => handleSkillClick(skill)}
                          variants={prefersReducedMotion ? undefined : badgeVariants}
                          className={`text-left transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-glow ${
                            isSelected ? 'rounded-md ring-2 ring-violet-glow' : ''
                          }`}
                        >
                          <Badge variant={isSelected ? 'primary' : 'default'}>
                            {skill}
                          </Badge>
                        </motion.button>
                      );
                    })}
                  </motion.div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
