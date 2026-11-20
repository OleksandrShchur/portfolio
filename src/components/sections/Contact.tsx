import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { profile } from '@/data/profile';
import { usePrefersReducedMotion } from '@/hooks';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Button } from '@/components/ui/Button';
import { CopyEmail } from '@/components/ui/CopyEmail';
import { SocialLinks } from '@/components/ui/SocialLinks';

export function Contact() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <SectionWrapper id="contact" title="Get in Touch" className="pt-6 md:pt-8">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-primary/30 bg-violet-primary/10"
          animate={prefersReducedMotion ? undefined : { y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Mail className="h-7 w-7 text-violet-glow" aria-hidden />
        </motion.div>

        <p className="text-lg text-zinc-400">
          Open to opportunities, collaboration, and interesting problems.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            type="button"
            magnetic
            onClick={() => {
              window.location.href = `mailto:${profile.email}`;
            }}
          >
            <Send className="h-4 w-4" />
            Send Email
          </Button>
          <CopyEmail />
        </div>

        <p className="mt-4 font-mono text-sm text-zinc-500">{profile.email}</p>

        <SocialLinks className="mt-8 justify-center" />
      </motion.div>
    </SectionWrapper>
  );
}
