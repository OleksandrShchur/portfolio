import { useRef, type MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks';
import { cn } from '@/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  spotlight?: boolean;
  spotlightColor?: string;
}

export function GlassCard({
  children,
  className,
  hover = true,
  spotlight = true,
  spotlightColor = 'rgba(167, 139, 250, 0.12)',
}: GlassCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !spotlight) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightBg = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-white/10 bg-base-card/60 p-6 backdrop-blur-md transition-all duration-300',
        hover &&
          'hover:border-violet-primary/40 hover:bg-base-card/80 hover:shadow-glow-sm',
        className,
      )}
      whileHover={hover && !prefersReducedMotion ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {spotlight && !prefersReducedMotion && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlightBg }}
          aria-hidden
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
