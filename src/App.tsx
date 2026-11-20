import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { BackToTop } from '@/components/ui/BackToTop';
import { CommandPalette } from '@/components/ui/CommandPalette';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Hero } from '@/components/sections/Hero';
import { scrollToSection } from '@/utils';

const About = lazy(() =>
  import('@/components/sections/About').then((m) => ({ default: m.About })),
);
const Skills = lazy(() =>
  import('@/components/sections/Skills').then((m) => ({ default: m.Skills })),
);
const Experience = lazy(() =>
  import('@/components/sections/Experience').then((m) => ({ default: m.Experience })),
);
const Projects = lazy(() =>
  import('@/components/sections/Projects').then((m) => ({
    default: m.Projects,
  })),
);
const Credentials = lazy(() =>
  import('@/components/sections/Credentials').then((m) => ({
    default: m.Credentials,
  })),
);
const Contact = lazy(() =>
  import('@/components/sections/Contact').then((m) => ({ default: m.Contact })),
);

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden />;
}

export default function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  // Global keyboard shortcut for Cmd+K / Ctrl+K and /
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectSkill = useCallback((skill: string) => {
    setActiveSkill((current) =>
      current?.toLowerCase() === skill.toLowerCase() ? null : skill,
    );
    scrollToSection('projects');
  }, []);

  return (
    <>
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectSkill={handleSelectSkill}
      />

      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills activeSkill={activeSkill} onSelectSkill={handleSelectSkill} />
          <Experience />
          <Projects
            activeSkill={activeSkill}
            onClearSkillFilter={() => setActiveSkill(null)}
            onSelectSkill={handleSelectSkill}
          />
          <Credentials />
          <Contact />
        </Suspense>
      </main>

      <BackToTop />
      <Footer />
    </>
  );
}
