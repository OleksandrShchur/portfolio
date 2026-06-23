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
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'certifications', label: 'Certifications', href: '#certifications' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const sectionIds = [
  'hero',
  'about',
  'skills',
  'experience',
  'education',
  'certifications',
  'projects',
  'contact',
] as const;

export type SectionId = (typeof sectionIds)[number];
