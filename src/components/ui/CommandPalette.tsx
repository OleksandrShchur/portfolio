import { useCallback, useEffect, useId, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Check,
  Code2,
  Copy,
  Download,
  FolderGit2,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  Search,
  Sparkles,
  User,
  X,
} from 'lucide-react';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { skillCategories } from '@/data/skills';
import { copyToClipboard, downloadCv, scrollToSection } from '@/utils';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSkill?: (skill: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Actions' | 'Navigation' | 'Projects' | 'Skills';
  icon: typeof Search;
  onSelect: () => void;
  badge?: string;
}

export function CommandPalette({ isOpen, onClose, onSelectSkill }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const listboxId = useId();

  // Reset query and selected index on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleCopyEmail = useCallback(async () => {
    const success = await copyToClipboard(profile.email);
    if (success) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        onClose();
      }, 800);
    }
  }, [onClose]);

  const allItems: CommandItem[] = useMemo(() => {
    const items: CommandItem[] = [
      // Actions
      {
        id: 'action-cv',
        title: 'Download CV / Resume',
        subtitle: 'PDF format · Oleksandr Shchur',
        category: 'Actions',
        icon: Download,
        onSelect: () => {
          downloadCv();
          onClose();
        },
      },
      {
        id: 'action-copy-email',
        title: copied ? 'Email Copied!' : 'Copy Email Address',
        subtitle: profile.email,
        category: 'Actions',
        icon: copied ? Check : Copy,
        onSelect: handleCopyEmail,
      },
      {
        id: 'action-linkedin',
        title: 'Open LinkedIn Profile',
        subtitle: 'Connect with Oleksandr on LinkedIn',
        category: 'Actions',
        icon: Linkedin,
        onSelect: () => {
          window.open(profile.linkedin, '_blank', 'noopener,noreferrer');
          onClose();
        },
      },
      // Navigation
      {
        id: 'nav-about',
        title: 'Go to About',
        subtitle: 'Summary, strengths & key statistics',
        category: 'Navigation',
        icon: User,
        onSelect: () => {
          scrollToSection('about');
          onClose();
        },
      },
      {
        id: 'nav-skills',
        title: 'Go to Skills',
        subtitle: 'Languages, frontend, backend, cloud & databases',
        category: 'Navigation',
        icon: Layers,
        onSelect: () => {
          scrollToSection('skills');
          onClose();
        },
      },
      {
        id: 'nav-experience',
        title: 'Go to Experience',
        subtitle: 'Career timeline across Argus Media and SoftServe',
        category: 'Navigation',
        icon: Award,
        onSelect: () => {
          scrollToSection('experience');
          onClose();
        },
      },
      {
        id: 'nav-projects',
        title: 'Go to Projects',
        subtitle: 'Featured apps, Telegram bots & commercial landing pages',
        category: 'Navigation',
        icon: FolderGit2,
        onSelect: () => {
          scrollToSection('projects');
          onClose();
        },
      },
      {
        id: 'nav-credentials',
        title: 'Go to Credentials & Education',
        subtitle: 'Master & Bachelor degrees, Microsoft and UiPath certifications',
        category: 'Navigation',
        icon: GraduationCap,
        onSelect: () => {
          scrollToSection('credentials');
          onClose();
        },
      },
      {
        id: 'nav-contact',
        title: 'Get in Touch',
        subtitle: 'Send message or start collaboration',
        category: 'Navigation',
        icon: Mail,
        onSelect: () => {
          scrollToSection('contact');
          onClose();
        },
      },
    ];

    // Projects
    projects.forEach((p) => {
      items.push({
        id: `proj-${p.id}`,
        title: p.title,
        subtitle: `${p.badge ?? 'Project'} · ${p.techStack.slice(0, 3).join(', ')}`,
        category: 'Projects',
        icon: Code2,
        badge: p.badge,
        onSelect: () => {
          scrollToSection('projects');
          onClose();
        },
      });
    });

    // Flatten all skills
    const addedSkills = new Set<string>();
    skillCategories.forEach((cat) => {
      cat.skills.forEach((s) => {
        if (!addedSkills.has(s)) {
          addedSkills.add(s);
          items.push({
            id: `skill-${s}`,
            title: s,
            subtitle: `${cat.title} Category`,
            category: 'Skills',
            icon: Sparkles,
            onSelect: () => {
              if (onSelectSkill) {
                onSelectSkill(s);
              }
              scrollToSection('skills');
              onClose();
            },
          });
        }
      });
    });

    return items;
  }, [copied, handleCopyEmail, onSelectSkill, onClose]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) {
      return allItems.slice(0, 10);
    }
    const cleanQuery = query.toLowerCase().trim();
    return allItems
      .filter((item) => {
        const matchTitle = item.title.toLowerCase().includes(cleanQuery);
        const matchSubtitle = item.subtitle?.toLowerCase().includes(cleanQuery);
        const matchCategory = item.category.toLowerCase().includes(cleanQuery);
        return matchTitle || matchSubtitle || matchCategory;
      })
      .slice(0, 12);
  }, [allItems, query]);

  // Keyboard navigation inside list
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredItems]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(
          (prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length),
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].onSelect();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-start justify-center bg-base/80 p-4 pt-20 backdrop-blur-md sm:pt-28"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Command search palette"
      >
        <motion.div
          className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-base-elevated shadow-glow"
          initial={{ opacity: 0, scale: 0.95, y: -16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -16 }}
          transition={{ duration: 0.15 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header search bar */}
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
            <Search className="h-5 w-5 text-violet-glow" aria-hidden />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command, project, or skill (e.g. 'AWS', 'CV', 'Santa')..."
              className="w-full bg-transparent font-sans text-base text-white placeholder-zinc-500 focus:outline-none"
              role="combobox"
              aria-expanded={filteredItems.length > 0}
              aria-controls={listboxId}
              aria-activedescendant={
                filteredItems[selectedIndex]
                  ? `cmd-${filteredItems[selectedIndex].id}`
                  : undefined
              }
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="rounded p-1 text-zinc-400 hover:text-white"
                aria-label="Clear query"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <kbd className="hidden rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-xs text-zinc-400 sm:inline-block">
              ESC
            </kbd>
          </div>

          {/* Results list */}
          <div
            id={listboxId}
            role="listbox"
            tabIndex={-1}
            aria-label="Search suggestions"
            className="max-h-80 overflow-y-auto p-2"
          >
            {filteredItems.length === 0 ? (
              <div className="py-12 text-center text-sm text-zinc-400">
                No matching results found for &ldquo;
                <span className="text-violet-glow">{query}</span>&rdquo;
              </div>
            ) : (
              filteredItems.map((item, index) => {
                const Icon = item.icon;
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={item.id}
                    id={`cmd-${item.id}`}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={item.onSelect}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors ${
                      isSelected
                        ? 'bg-violet-primary/20 text-white'
                        : 'text-zinc-300 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${
                          isSelected
                            ? 'border-violet-glow/40 bg-violet-primary/30 text-violet-glow'
                            : 'border-white/10 bg-base-card text-zinc-400'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-medium text-white">{item.title}</p>
                        {item.subtitle && (
                          <p className="truncate text-xs text-zinc-400">
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      {item.badge && (
                        <span className="rounded-full border border-violet-primary/30 bg-violet-primary/10 px-2 py-0.5 font-mono text-[10px] text-violet-glow">
                          {item.badge}
                        </span>
                      )}
                      <span className="font-mono text-[11px] text-zinc-500">
                        {item.category}
                      </span>
                      {isSelected && (
                        <ArrowRight className="h-3.5 w-3.5 text-violet-glow" />
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer tips */}
          <div className="flex items-center justify-between border-t border-white/10 bg-base/50 px-4 py-2.5 text-xs text-zinc-400">
            <span className="flex items-center gap-2">
              <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px]">
                ↑↓
              </kbd>
              Navigate
              <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px]">
                ↵
              </kbd>
              Select
            </span>
            <span className="font-mono text-[11px] text-violet-glow">
              {filteredItems.length} result{filteredItems.length === 1 ? '' : 's'}
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
