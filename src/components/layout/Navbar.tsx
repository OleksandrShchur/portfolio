import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, Search, X } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { useActiveSection } from '@/hooks';
import { downloadCv, scrollToSection, cn } from '@/utils';
import { Button } from '@/components/ui/Button';

const observedSections = navItems.map((item) => item.id);

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
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
        <div className="relative z-50 flex items-center justify-between rounded-2xl border border-white/10 bg-base/80 px-4 py-2.5 shadow-lg shadow-black/20 backdrop-blur-xl">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-1 font-mono text-sm font-semibold text-violet-glow transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow"
          >
            <span className="text-white">oleksandr</span>
            <span className="text-violet-glow">.shchur</span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-glow transition-all group-hover:scale-150" />
          </button>

          {/* Desktop Nav Items with Framer Motion Sliding Pill */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      'relative z-10 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow',
                      isActive ? 'text-white' : 'text-zinc-400 hover:text-white',
                    )}
                  >
                    {item.label}
                  </button>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-lg border border-violet-primary/30 bg-violet-primary/25"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Quick Command Palette Button */}
            {onOpenCommandPalette && (
              <button
                type="button"
                onClick={onOpenCommandPalette}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-zinc-300 transition-colors hover:border-violet-glow/40 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow"
                aria-label="Search and command palette"
              >
                <Search className="h-3.5 w-3.5 text-violet-glow" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden rounded border border-white/10 bg-base-card px-1.5 py-0.5 font-mono text-[10px] text-zinc-400 sm:inline-block">
                  ⌘K
                </kbd>
              </button>
            )}

            {/* CV Download Button */}
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={downloadCv}
              className="hidden sm:inline-flex"
              aria-label="Download CV"
            >
              <Download className="h-3.5 w-3.5" />
              CV
            </Button>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow md:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-base/90 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="absolute right-4 top-20 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-white/15 bg-base-elevated p-6 shadow-glow"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Search Button */}
              {onOpenCommandPalette && (
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="mb-3 flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-300"
                >
                  <span className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-violet-glow" />
                    Quick Search & Commands
                  </span>
                  <kbd className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px]">
                    ⌘K
                  </kbd>
                </button>
              )}

              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        'flex min-h-[44px] w-full items-center rounded-xl px-4 text-left text-base transition-colors',
                        activeSection === item.id
                          ? 'bg-violet-primary/20 font-medium text-violet-glow'
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
    </header>
  );
}
