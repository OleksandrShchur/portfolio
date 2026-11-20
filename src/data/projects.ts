export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'cloud-bot';

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: ProjectCategory;
  badge?: string;
  featured?: boolean;
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    id: 'secret-santa',
    title: 'Secret Santa',
    category: 'fullstack',
    badge: 'Telegram Mini App',
    featured: true,
    description:
      'Telegram Mini App (TMA) for organizing gift exchanges without email — features Telegram WebApp SDK authentication, exclusion matrix rules, instant private bot notifications, and interactive reveal cards.',
    highlights: [
      'Telegram WebApp SDK auth & theme synchronization',
      'Configurable participant exclusion matrix rules',
      'Interactive card reveal animations with real-time bot alerts',
      'Fullstack modern stack: React 19 + .NET 10 Web API',
    ],
    techStack: [
      '.NET 10',
      'ASP.NET Core',
      'React 19',
      'TypeScript',
      'Vite',
      'Telegram Mini Apps',
      'SQL Server',
    ],
    githubUrl: 'https://github.com/OleksandrShchur/SecretSanta',
  },
  {
    id: 'sellasolar-admin',
    title: 'SellaSolar Admin',
    category: 'fullstack',
    badge: 'Enterprise CRM',
    featured: true,
    description:
      'Internal CRM and management panel for a solar panel installation company, managing projects, warehouse inventory, materials, and worker assignments with database-first EF Core.',
    highlights: [
      'Comprehensive project pipeline & installation dispatching',
      'Real-time warehouse inventory and bill-of-materials tracking',
      'Modular dashboard architecture with MUI & React',
      'High-performance queries via EF Core and SQL Server',
    ],
    techStack: [
      '.NET 10',
      'ASP.NET Core',
      'EF Core',
      'SQL Server',
      'React',
      'TypeScript',
      'Vite',
      'MUI',
    ],
    githubUrl: 'https://github.com/OleksandrShchur/SellaSolar.Admin',
  },
  {
    id: 'stand',
    title: 'Stand',
    category: 'fullstack',
    badge: 'Public Platform',
    featured: false,
    description:
      'Public web app for booking volunteer duty shifts at informational stands across Ternopil, featuring slot scheduling, reservation tracking without login, and cookie-authenticated administration.',
    highlights: [
      'Frictionless volunteer scheduling without mandatory sign-up',
      'Role-based administration panel with cookie-authenticated security',
      'Dynamic calendar time-slot booking grid',
    ],
    techStack: [
      '.NET 10',
      'ASP.NET Core',
      'EF Core',
      'SQL Server',
      'React 19',
      'TypeScript',
      'Vite',
      'MUI',
    ],
    githubUrl: 'https://github.com/OleksandrShchur/Stand',
  },
  {
    id: 'findif-bot',
    title: 'AskIfBot',
    category: 'cloud-bot',
    badge: 'Community Bot',
    featured: true,
    description:
      'Telegram bot for the «Франківськ Питає» community channel — users submit questions and photo albums that moderators review before publishing. Covers channel subscription checks, durable ask sessions, Kyiv working-hours messaging, and automated admin queues.',
    highlights: [
      'Durable multi-step ask sessions with formatting preservation',
      'Admin moderation queue with fast inline-keyboard approvals',
      'Kyiv timezone-aware operational hours messaging',
      'Structured Serilog logging & GitHub Actions CI pipeline',
    ],
    techStack: [
      '.NET 9',
      'ASP.NET Core',
      'Telegram.Bot',
      'EF Core',
      'SQL Server',
      'Serilog',
      'xUnit',
    ],
    githubUrl: 'https://github.com/OleksandrShchur/FindIFBot',
    liveUrl: 'https://t.me/ask_frankivsk',
  },
  {
    id: 'mebel-landing',
    title: 'MebelLanding',
    category: 'frontend',
    badge: 'Interactive UI',
    featured: false,
    description:
      'Responsive furniture store showcase with interactive category grids and a fullscreen magazine-style page-flip product catalog viewer.',
    highlights: [
      'Realistic magazine page-flip viewer built with react-pageflip',
      'Fluid Framer Motion micro-interactions and transitions',
      'Mobile-first responsive layout with Tailwind CSS',
    ],
    techStack: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'react-pageflip',
    ],
    githubUrl: 'https://github.com/OleksandrShchur/MebelLanding',
  },
  {
    id: 'sellasolar',
    title: 'SellaSolar',
    category: 'frontend',
    badge: 'Live Commercial',
    featured: true,
    description:
      'Marketing landing page for a residential solar panel installation company with hero themes, interactive savings calculator, service area mapping, and dynamic quote request flows.',
    highlights: [
      'Interactive ROI & kilowatt-hour solar savings calculator',
      'Smooth scroll animations and theme transitions',
      'Validated multi-step quote request workflow',
    ],
    techStack: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'Lucide',
    ],
    githubUrl: 'https://github.com/OleksandrShchur/SellaSolar',
    liveUrl: 'https://oleksandrshchur.github.io/SellaSolar/',
  },
];
