export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    id: 'secret-santa',
    title: 'Secret Santa',
    description:
      'Telegram Mini App (TMA) for organizing Secret Santa gift exchanges without email — features Telegram WebApp SDK authentication, exclusion matrix rules, instant private bot notifications, and interactive reveal cards.',
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
    description:
      'Internal CRM and management panel for a solar panel installation company, managing projects, warehouse inventory, materials, and worker assignments with database-first EF Core.',
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
    description:
      'Public web app for booking volunteer duty shifts at informational stands across Ternopil, featuring slot scheduling, reservation tracking without login, and cookie-authenticated administration.',
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
    description:
      'Telegram bot for the «Франківськ Питає» community channel — users submit text and photo albums that moderators review before publishing. Covers subscription checks, durable ask sessions with preserved formatting, Kyiv working-hours messaging, admin moderation with context tables and pending queue, request history, ads/collaboration flow, Serilog logging, and GitHub Actions CI.',
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
    description:
      'Responsive furniture store landing page with a hero carousel, interactive category grid, and a fullscreen magazine-style page-flip product viewer.',
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
    description:
      'Marketing landing page for a residential solar panel installation company with hero themes, interactive savings calculator, service area mapping, and dynamic quote request flows.',
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
