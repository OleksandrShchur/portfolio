import { cn } from '@/utils';

export type BadgeVariant = 'default' | 'primary' | 'secondary';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  mono?: boolean;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    'border-violet-primary/25 bg-violet-primary/10 text-zinc-200 hover:border-violet-glow/50 hover:bg-violet-primary/20',
  primary: 'border-violet-glow/60 bg-violet-primary/30 text-white shadow-glow-sm',
  secondary: 'border-white/10 bg-white/5 text-zinc-300 hover:border-violet-primary/30',
};

function badgeClassName(
  mono = true,
  className?: string,
  variant: BadgeVariant = 'default',
) {
  return cn(
    'inline-flex items-center rounded-lg border px-3 py-1 text-sm transition-colors',
    variantStyles[variant],
    mono && 'font-mono text-xs tracking-wide',
    className,
  );
}

export function Badge({
  children,
  className,
  mono = true,
  variant = 'default',
}: BadgeProps) {
  return <span className={badgeClassName(mono, className, variant)}>{children}</span>;
}
