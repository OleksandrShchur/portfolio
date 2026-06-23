import { motion } from 'framer-motion';
import { cn } from '@/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'rounded-2xl border border-white/10 bg-base-card/60 p-6 backdrop-blur-md',
        hover && 'transition-colors hover:border-violet-primary/30 hover:bg-base-card/80',
        className,
      )}
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
