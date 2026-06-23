import { Download, Github, Linkedin } from 'lucide-react';
import { profile } from '@/data/profile';
import { downloadCv } from '@/utils';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="text-center md:text-left">
          <p className="text-sm text-zinc-400">
            © {year} {profile.name}
          </p>
          <p className="mt-1 font-mono text-xs text-zinc-500">
            Built with React + TypeScript
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-violet-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-violet-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <button
            type="button"
            onClick={downloadCv}
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-violet-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-glow"
          >
            <Download className="h-4 w-4" />
            Download CV
          </button>
        </div>
      </div>
    </footer>
  );
}
