import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/hooks';
import { cn } from '@/utils';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function SectionWrapper({
  id,
  children,
  className,
  title,
  subtitle,
}: SectionWrapperProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id={id} className={cn('scroll-mt-24 py-20 md:py-28', className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.header
            className="mb-12 md:mb-16"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                <span className="font-mono text-violet-glow">//</span> {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 max-w-2xl text-lg text-zinc-400">{subtitle}</p>
            )}
            <div className="mt-4 h-px w-24 bg-gradient-to-r from-violet-primary to-transparent" />
          </motion.header>
        )}
        {children}
      </div>
    </section>
  );
}
