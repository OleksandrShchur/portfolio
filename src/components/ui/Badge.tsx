import { cn } from '@/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  mono?: boolean;
}

export function badgeClassName(mono = true, className?: string) {
  return cn(
    'inline-flex items-center rounded-lg border border-violet-primary/25 bg-violet-primary/10 px-3 py-1.5 text-sm text-zinc-200 transition-colors hover:border-violet-glow/50 hover:bg-violet-primary/20',
    mono && 'font-mono text-xs tracking-wide',
    className,
  );
}

export function Badge({ children, className, mono = true }: BadgeProps) {
  return <span className={badgeClassName(mono, className)}>{children}</span>;
}
