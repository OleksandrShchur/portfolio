export interface Certification {
  id: string;
  code: string;
  name: string;
  issuer: string;
  year: number;
}

export const certifications: Certification[] = [
  {
    id: 'pl-200',
    code: 'PL-200',
    name: 'Power Platform Functional Consultant Associate',
    issuer: 'Microsoft',
    year: 2021,
  },
  {
    id: 'pl-400',
    code: 'PL-400',
    name: 'Power Platform Developer Associate',
    issuer: 'Microsoft',
    year: 2021,
  },
  {
    id: 'uipath-rpa',
    code: 'RPA Developer Foundation',
    name: 'RPA Developer Foundation',
    issuer: 'UiPath',
    year: 2021,
  },
];
