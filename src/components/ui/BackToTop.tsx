import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks';
import { scrollToSection } from '@/utils';

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.button
        type="button"
        onClick={() => scrollToSection('hero')}
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8, y: 10 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
        exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.8, y: 10 }}
        className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-base-elevated/90 text-zinc-300 shadow-glow backdrop-blur-md transition-colors hover:border-violet-glow/50 hover:bg-violet-primary/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5 text-violet-glow" />
      </motion.button>
    </AnimatePresence>
  );
}
