import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { useActiveSection } from '@/hooks';
import { downloadCv, scrollToSection, cn } from '@/utils';
import { Button } from '@/components/ui/Button';

const observedSections = navItems.map((item) => item.id);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(observedSections);

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className="mx-auto mt-4 max-w-6xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="relative z-50 flex items-center justify-between rounded-2xl border border-white/10 bg-base/70 px-4 py-3 backdrop-blur-xl">
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="font-mono text-sm font-semibold text-violet-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow"
          >
            OS<span className="text-white">.dev</span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'rounded-lg px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow',
                    activeSection === item.id
                      ? 'bg-violet-primary/20 text-violet-glow'
                      : 'text-zinc-400 hover:text-white',
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={downloadCv}
              aria-label="Download CV"
            >
              <Download className="h-4 w-4" />
              CV
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-zinc-300 lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-base/90 backdrop-blur-md lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="absolute right-4 top-20 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-white/10 bg-base-elevated p-6 shadow-glow"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        'flex min-h-[44px] w-full items-center rounded-xl px-4 text-left text-base',
                        activeSection === item.id
                          ? 'bg-violet-primary/20 text-violet-glow'
                          : 'text-zinc-300 hover:bg-white/5',
                      )}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-4 border-t border-white/10 pt-4">
                <Button
                  type="button"
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    downloadCv();
                    setIsOpen(false);
                  }}
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <aside
        className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
        aria-label="Section indicator"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleNavClick(item.href)}
            className="group flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow"
            aria-label={item.label}
          >
            <span
              className={cn(
                'h-2 w-2 rounded-full transition-all',
                activeSection === item.id
                  ? 'scale-125 bg-violet-glow shadow-glow-sm'
                  : 'bg-zinc-600 group-hover:bg-violet-primary',
              )}
            />
          </button>
        ))}
      </aside>
    </header>
  );
}
