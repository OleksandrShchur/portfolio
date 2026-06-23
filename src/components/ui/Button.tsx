import { motion, type HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';
import { cn } from '@/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  magnetic?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-violet-primary text-white shadow-glow-sm hover:bg-violet-deep hover:shadow-glow',
  secondary:
    'bg-base-card/80 text-violet-glow border border-violet-primary/30 hover:border-violet-glow/60 hover:bg-violet-muted/20',
  ghost: 'text-zinc-300 hover:text-white hover:bg-white/5',
  outline:
    'border border-violet-primary/40 text-violet-glow hover:border-violet-glow hover:bg-violet-primary/10',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm min-h-[44px]',
  md: 'px-5 py-2.5 text-sm min-h-[44px]',
  lg: 'px-6 py-3 text-base min-h-[48px]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    variant = 'primary',
    size = 'md',
    magnetic = false,
    children,
    ...props
  },
  ref,
) {
  return (
    <motion.button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      whileHover={magnetic ? { scale: 1.03 } : undefined}
      whileTap={magnetic ? { scale: 0.98 } : undefined}
      {...props}
    >
      {children}
    </motion.button>
  );
});
