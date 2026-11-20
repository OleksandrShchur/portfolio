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
      'Architect and develop cloud-native backend services (.NET 8/9, Python) and event-driven data pipelines.',
      'Embrace AWS serverless infrastructure (Lambda, Step Functions, SQS/SNS, Athena, CloudFormation).',
      'Optimize query throughput on high-volume MySQL databases handling benchmark indices.',
      'Lead automated CI/CD pipeline improvements (TeamCity, Octopus, SonarQube quality gates).',
      'Drive rigorous unit, integration, and contract testing ensuring 99.9% pipeline reliability.',
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
      'Modernized healthcare insurance portals, bridging legacy ASP.NET Web Forms to ASP.NET Core and React.',
      'Constructed scalable UI components with React, Redux, and SignalR for real-time claim notifications.',
      'Engineered automated test suites using Cypress, Jest, and xUnit across multi-tier insurance flows.',
      'Authored technical design specifications and managed defects through Jira/Confluence workflows.',
    ],
    stack: [
      '.NET Core',
      'React.js',
      'Redux',
      'ASP.NET Core',
      'MS SQL Server',
      'SignalR',
      'Cypress',
      'Jest',
      'Azure',
      'Hangfire',
      'TeamCity',
      'Octopus',
    ],
    teamSize: 'Scrum team 8, project team ~40',
  },
  {
    id: 'softserve-oil',
    company: 'SoftServe',
    role: 'Software Engineer',
    period: 'Jan 2021 – Oct 2021',
    project:
      'App for editing data, monitoring performance and profit from oil production.',
    responsibilities: [
      'Engineered full-stack features using ASP.NET Core Web API, .NET 5, and Angular 11.',
      'Designed SQL Server views, schemas, and complex stored procedures for UI customization.',
      'Integrated Power Platform (Power Apps, Power Automate) and SharePoint workflows for automated data entry.',
      'Coordinated UAT deployments via Azure DevOps and authored comprehensive operational guides.',
    ],
    stack: [
      '.NET 5',
      'ASP.NET Core',
      'Angular 11',
      'SQL Server',
      'Power Apps',
      'Power Automate',
      'Azure DevOps',
      'Identity Server',
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
      'Developed event discovery and registration modules with ASP.NET Core MVC and React.js.',
      'Implemented data persistence layers using Entity Framework Core and SQL Server.',
      'Authored unit tests and actively participated in code reviews and agile sprint rituals.',
    ],
    stack: [
      'ASP.NET Core MVC',
      'React.js',
      'Entity Framework Core',
      'SQL Server',
      'Redux',
    ],
    teamSize: '5 members',
  },
];
