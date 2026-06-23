import { usePrefersReducedMotion } from '@/hooks';

export function AnimatedBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-base" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        className={`absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-deep/30 blur-[120px] ${
          prefersReducedMotion ? '' : 'animate-pulse-glow'
        }`}
      />
      <div
        className={`absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-violet-primary/20 blur-[100px] ${
          prefersReducedMotion ? '' : 'animate-float'
        }`}
      />
      <div
        className={`absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-magenta-accent/10 blur-[100px] ${
          prefersReducedMotion ? '' : 'animate-pulse-glow'
        }`}
        style={{ animationDelay: '2s' }}
      />

      <div className="absolute left-0 top-1/4 h-px w-full bg-holo-line opacity-30" />
      <div className="absolute bottom-1/3 left-0 h-px w-2/3 bg-holo-line opacity-20" />

      {!prefersReducedMotion && (
        <div className="absolute inset-0">
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-violet-glow/40"
              style={{
                left: `${(i * 17 + 7) % 100}%`,
                top: `${(i * 23 + 11) % 100}%`,
                animation: `float ${6 + (i % 4)}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
