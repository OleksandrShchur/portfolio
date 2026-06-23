import { Github, Linkedin } from 'lucide-react';
import { profile } from '@/data/profile';
import { cn } from '@/utils';

interface SocialLinksProps {
  className?: string;
  size?: 'sm' | 'md';
}

const links = [
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: profile.github,
    icon: Github,
  },
] as const;

export function SocialLinks({ className, size = 'md' }: SocialLinksProps) {
  const iconSize = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5';
  const buttonSize = size === 'sm' ? 'h-10 w-10' : 'h-12 w-12';

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            'inline-flex items-center justify-center rounded-xl border border-white/10 bg-base-card/50 text-zinc-300 transition-all hover:border-violet-primary/50 hover:text-violet-glow hover:shadow-glow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow',
            buttonSize,
          )}
        >
          <Icon className={iconSize} />
        </a>
      ))}
    </div>
  );
}
