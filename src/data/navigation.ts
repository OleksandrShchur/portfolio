export interface NavItem {
  id: string;
  label: string;
  href: string;
  disabled?: boolean;
}

export const navItems: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'credentials', label: 'Credentials', href: '#credentials' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const sectionIds = [
  'hero',
  'about',
  'skills',
  'experience',
  'projects',
  'credentials',
  'education',
  'certifications',
  'contact',
] as const;

export type SectionId = (typeof sectionIds)[number];
