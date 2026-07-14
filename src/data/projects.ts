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
    id: 'findif-bot',
    title: 'AskIFBot',
    description:
      'Telegram bot for the «Франківськ Питає» community channel — users submit publication requests (text and photo albums) that moderators review before publishing. Includes subscription checks, durable ask sessions, request history, and a full admin moderation workflow.',
    techStack: ['.NET 9', 'ASP.NET Core', 'Telegram.Bot', 'EF Core', 'SQL Server', 'Serilog', 'xUnit'],
    liveUrl: 'https://t.me/ask_frankivsk',
    isPrivate: true,
  },
  {
    id: 'mebel-online',
    title: 'MebelOnline',
    description:
      'Full-stack furniture e-commerce with ASP.NET Core API and a React SPA (Vite, MUI, routing).',
    techStack: ['ASP.NET Core', 'React', 'TypeScript', 'Vite', 'MUI', 'SQL Server'],
    githubUrl: 'https://github.com/OleksandrShchur/MebelOnline',
  },
  {
    id: 'mebel-landing',
    title: 'MebelLanding',
    description:
      'Responsive furniture landing page with hero carousel, category grid, and fullscreen magazine-style page-flip viewer.',
    techStack: ['React 19', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/OleksandrShchur/MebelLanding',
  },
  {
    id: 'events-express',
    title: 'EventsExpress',
    description:
      'Event discovery platform to create, join, and follow social events — contributed during SoftServe internship.',
    techStack: ['ASP.NET Core', 'React', 'Redux', 'SignalR', 'EF Core', 'SQL Server'],
    githubUrl: 'https://github.com/OleksandrShchur/EventsExpress',
  },
  {
    id: 'record-book',
    title: 'RecordBook',
    description:
      'University attendance record book; split into microservices for auth, notifications, and visitor tracking.',
    techStack: ['ASP.NET Core', 'Microservices', 'React', 'TypeScript', 'SQL Server'],
    githubUrl: 'https://github.com/OleksandrShchur/VisitorsTracker',
  },
  {
    id: 'accu-web-scraper',
    title: 'AccuWebScraper',
    description:
      'Web scraping tool with ASP.NET Core backend and a React 19 dashboard for viewing scraped data.',
    techStack: ['ASP.NET Core', 'React 19', 'TypeScript', 'Vite'],
    githubUrl: 'https://github.com/OleksandrShchur/AccuWebScraper',
  },
];
