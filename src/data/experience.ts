export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  project: string;
  responsibilities: string[];
  stack: string[];
  teamSize: string;
}

export const experience: ExperienceEntry[] = [
  {
    id: 'argus-media',
    company: 'Argus Media',
    role: 'Software Engineer',
    period: 'Nov 2023 – Present',
    project:
      'Solution to index physical trade and benchmarks in financial derivative markets.',
    responsibilities: [
      'Design and implement new functionality',
      'Embrace cloud technologies',
      'Maintain and support existing platforms',
      'Document and maintain monitoring quality',
      'Fix bugs and cover code with tests',
    ],
    stack: [
      '.NET',
      'Python',
      'AWS (Lambda, Step Functions, API Gateway, EC2, S3, CloudFormation, CloudWatch, Athena, SQS/SNS, IAM, ECR)',
      'MySQL',
      'SonarQube',
      'Octopus',
      'TeamCity',
      'Kibana',
      'Event-driven Architecture',
    ],
    teamSize: '~18 members',
  },
  {
    id: 'softserve-healthcare',
    company: 'SoftServe',
    role: 'Software Engineer',
    period: 'Oct 2021 – Dec 2023',
    project: 'Healthcare solution for insurance companies.',
    responsibilities: [
      'Create new features and maintain existing code',
      'Write unit, integration, and e2e tests',
      'Fix bugs and hotfixes',
      'Write project documentation and defect/test investigations',
    ],
    stack: [
      'ASP.NET Web Forms',
      'ASP.NET Core 3.1',
      'React.js',
      'Identity Server',
      'MS SQL Server',
      'Cypress',
      'Redux',
      'Jest',
      'SignalR',
      'Hangfire',
      'Azure',
      'TeamCity',
      'Octopus',
      'Figma',
      'Jira',
      'Confluence',
      'IIS',
    ],
    teamSize: 'Scrum team 8, project ~40',
  },
  {
    id: 'softserve-oil',
    company: 'SoftServe',
    role: 'Software Engineer',
    period: 'Jan 2021 – Oct 2021',
    project:
      'App for editing data, monitoring performance and profit from oil production.',
    responsibilities: [
      'Write flow for editing data via app and SharePoint',
      'Create views and tables in SQL Server',
      'Write stored procedures for new scenario UI customization',
      'Deploy solution in UAT environment, fix bugs, write documentation',
    ],
    stack: [
      'ASP.NET Core',
      'ASP.NET Web API',
      '.NET 5',
      'Angular 11',
      'Identity Server',
      'Bootstrap',
      'Power Platform',
      'Power Apps',
      'Power Automate',
      'SQL Server',
      'SharePoint',
      'Azure DevOps',
      'Azure Logic Apps',
      'UI Path',
    ],
    teamSize: '12 members',
  },
  {
    id: 'softserve-internship',
    company: 'SoftServe',
    role: 'Software Engineer (Internship)',
    period: 'Oct 2020 – Dec 2020',
    project: 'Service for creating and joining events.',
    responsibilities: [
      'Develop new features, refactor code, write unit tests, fix bugs',
    ],
    stack: [
      'ASP.NET Core MVC',
      '.NET Core 3.x/C#',
      'Entity Framework Core',
      'React.js',
      'Redux',
      'JavaScript',
      'SQL Server',
      'IIS',
    ],
    teamSize: '5 members',
  },
];
