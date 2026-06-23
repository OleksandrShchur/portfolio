export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  variant?: 'primary' | 'secondary';
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    skills: ['C#', 'JavaScript/TypeScript', 'Python', 'SQL/T-SQL'],
    variant: 'primary',
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: ['React.js', 'Angular', 'Redux'],
    variant: 'primary',
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: ['.NET', 'ASP.NET Core', 'ASP.NET Web API'],
    variant: 'primary',
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    skills: [
      'AWS (Lambda, Step Functions, API Gateway, EC2, S3, CloudFormation, CloudWatch, Athena, SQS/SNS, IAM, ECR)',
      'Azure',
    ],
    variant: 'primary',
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: ['MS SQL Server', 'PostgreSQL', 'MySQL', 'DynamoDB'],
    variant: 'secondary',
  },
  {
    id: 'orm',
    title: 'ORM / Data',
    skills: ['Entity Framework Core', 'Dapper'],
    variant: 'secondary',
  },
  {
    id: 'practices',
    title: 'Practices',
    skills: [
      'SOLID',
      'Design Patterns',
      'Agile (Scrum, Kanban)',
      'Event-driven Architecture',
    ],
    variant: 'secondary',
  },
  {
    id: 'testing',
    title: 'Testing',
    skills: ['Jest', 'Cypress', 'Unit / Integration / E2E Testing'],
    variant: 'secondary',
  },
  {
    id: 'tools',
    title: 'Tools & Other',
    skills: [
      'Power Platform (Power Apps, Power Automate)',
      'Git/GitHub',
      'TeamCity',
      'Octopus',
      'SonarQube',
      'Kibana',
      'Identity Server',
      'SignalR',
      'Hangfire',
    ],
    variant: 'secondary',
  },
];
