export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export const education: EducationEntry[] = [
  {
    id: 'masters',
    degree: "Master's, Computer Science",
    institution: 'Yuriy Fedkovych Chernivtsi National University',
    period: '2022–2023',
  },
  {
    id: 'bachelors',
    degree: "Bachelor's, Computer Science",
    institution: 'Yuriy Fedkovych Chernivtsi National University',
    period: '2018–2022',
  },
];
