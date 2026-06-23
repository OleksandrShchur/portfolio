import { lazy, Suspense } from 'react';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Hero } from '@/components/sections/Hero';

const About = lazy(() =>
  import('@/components/sections/About').then((m) => ({ default: m.About })),
);
const Skills = lazy(() =>
  import('@/components/sections/Skills').then((m) => ({ default: m.Skills })),
);
const Experience = lazy(() =>
  import('@/components/sections/Experience').then((m) => ({ default: m.Experience })),
);
const Education = lazy(() =>
  import('@/components/sections/Education').then((m) => ({ default: m.Education })),
);
const Certifications = lazy(() =>
  import('@/components/sections/Certifications').then((m) => ({
    default: m.Certifications,
  })),
);
const ProjectsPlaceholder = lazy(() =>
  import('@/components/sections/ProjectsPlaceholder').then((m) => ({
    default: m.ProjectsPlaceholder,
  })),
);
const Contact = lazy(() =>
  import('@/components/sections/Contact').then((m) => ({ default: m.Contact })),
);

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden />;
}

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <ProjectsPlaceholder />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
