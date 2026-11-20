import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Download, Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/profile';
import { usePrefersReducedMotion } from '@/hooks';
import { downloadCv, scrollToSection } from '@/utils';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % profile.rotatingRoles.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-24 items-center pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-primary/30 bg-violet-primary/10 px-3 py-1 font-mono text-xs text-violet-glow">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            <span>Open for new engineering challenges</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-2xl font-semibold text-violet-primary sm:text-3xl">
            {profile.title}
          </p>

          <div className="mt-4 h-8 overflow-hidden">
            <motion.p
              key={roleIndex}
              className="font-mono text-lg text-zinc-300"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
            >
              <span className="text-violet-glow">&gt;</span>{' '}
              {profile.rotatingRoles[roleIndex]}
            </motion.p>
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            {profile.tagline}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
            <MapPin className="h-4 w-4 text-violet-glow" aria-hidden />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button type="button" magnetic onClick={() => scrollToSection('projects')}>
              <Code2 className="h-4 w-4" />
              Explore Projects
            </Button>
            <Button
              type="button"
              variant="secondary"
              magnetic
              onClick={() => scrollToSection('experience')}
            >
              <ArrowDown className="h-4 w-4" />
              Experience
            </Button>
            <Button
              type="button"
              variant="secondary"
              magnetic
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="h-4 w-4" />
              Contact
            </Button>
            <Button type="button" variant="outline" magnetic onClick={downloadCv}>
              <Download className="h-4 w-4" />
              CV
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center lg:justify-end"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-primary/40 via-violet-glow/20 to-magenta-accent/20 blur-2xl"
              aria-hidden
            />
            <div className="relative rounded-[2rem] border border-white/20 bg-white/5 p-2 shadow-glow-lg backdrop-blur-sm">
              <picture>
                <source srcSet={profile.photo.webp} type="image/webp" />
                <img
                  src={profile.photo.png}
                  alt={profile.photo.alt}
                  width={400}
                  height={400}
                  className="h-64 w-64 rounded-[1.75rem] object-cover sm:h-80 sm:w-80"
                  style={{ objectPosition: profile.photo.objectPosition }}
                  loading="eager"
                  fetchPriority="high"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src.endsWith('profile.svg')) return;
                    img.src = profile.photo.fallback;
                  }}
                />
              </picture>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
