import { useEffect, useState } from 'react';

export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

export function useActiveSection(sectionIds: readonly string[]): string {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    let observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    const disconnectObservers = () => {
      observers.forEach((observer) => observer.disconnect());
      observers = [];
      visibleSections.clear();
    };

    const setup = (): boolean => {
      disconnectObservers();

      let allFound = true;

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (!element) {
          allFound = false;
          return;
        }

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                visibleSections.set(id, entry.intersectionRatio);
              } else {
                visibleSections.delete(id);
              }

              if (visibleSections.size === 0) return;

              const sorted = [...visibleSections.entries()].sort(
                (a, b) => b[1] - a[1],
              );
              setActiveSection(sorted[0][0]);
            });
          },
          { rootMargin: '-40% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
        );

        observer.observe(element);
        observers.push(observer);
      });

      return allFound;
    };

    if (setup()) {
      return () => disconnectObservers();
    }

    const mutationObserver = new MutationObserver(() => {
      if (setup()) {
        mutationObserver.disconnect();
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      disconnectObservers();
    };
  }, [sectionIds]);

  return activeSection;
}

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
