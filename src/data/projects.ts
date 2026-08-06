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
    title: 'AskIfBot',
    description:
      'Telegram bot for the «Франківськ Питає» community channel — users submit text and photo albums that moderators review before publishing. Covers subscription checks, durable ask sessions with preserved formatting, Kyiv working-hours messaging, admin moderation with context tables and pending queue, request history, ads/collaboration flow, Serilog logging, and GitHub Actions CI.',
    techStack: ['.NET 9', 'ASP.NET Core', 'Telegram.Bot', 'EF Core', 'SQL Server', 'Serilog', 'xUnit'],
    githubUrl: 'https://github.com/OleksandrShchur/FindIFBot',
    liveUrl: 'https://t.me/ask_frankivsk',
  },
  {
    id: 'mebel-online',
    title: 'MebelOnline',
    description:
      'Furniture e-commerce with an ASP.NET Core 9 API (products, categories, search) and a React SPA built with Vite, MUI, and client-side routing.',
    techStack: [
      'ASP.NET Core 9',
      'React',
      'TypeScript',
      'Vite',
      'MUI',
      'EF Core',
      'SQL Server',
      'OpenAPI',
    ],
    githubUrl: 'https://github.com/OleksandrShchur/MebelOnline',
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
      'University attendance record book that lets professors check and monitor student class visits, built as an ASP.NET Core SPA with JWT and Google auth.',
    techStack: [
      'ASP.NET Core 3.1',
      'EF Core',
      'SQL Server',
      'React',
      'Redux',
      'Material-UI',
      'JWT',
      'Google Auth',
    ],
    githubUrl: 'https://github.com/OleksandrShchur/VisitorsTracker',
  },
  {
    id: 'accu-web-scraper',
    title: 'AccuWebScraper',
    description:
      'Scheduled web scraper that parses page content and delivers results to Telegram within a configured time window, with an ASP.NET Core 9 API and React 19 dashboard.',
    techStack: [
      'ASP.NET Core 9',
      'HtmlAgilityPack',
      'React 19',
      'TypeScript',
      'Vite',
      'Docker',
    ],
    githubUrl: 'https://github.com/OleksandrShchur/AccuWebScraper',
  },
];
