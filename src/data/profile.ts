export const profile = {
  name: 'Oleksandr Shchur',
  title: 'Software Engineer',
  email: 'oshchur2@gmail.com',
  location: 'Ukraine',
  linkedin: 'https://www.linkedin.com/in/oleksandr-shchur-7313911b8/',
  github: 'https://github.com/OleksandrShchur',
  cvPath: '/portfolio/cv.pdf',
  photo: {
    webp: '/portfolio/images/profile.webp',
    png: '/portfolio/images/profile.png',
    fallback: '/portfolio/images/profile.svg',
    alt: 'Oleksandr Shchur — professional portrait',
  },
  tagline:
    'Building cloud-native and enterprise solutions with C#/.NET, React, and AWS — focused on meaningful problems and collaborative delivery.',
  summary:
    'Strong knowledge of C#/.NET with experience in Angular and React. Quick to adapt in teams, focused on non-trivial problems, continuous self-improvement, and collaborative problem-solving. Experienced in cloud-native and enterprise systems across finance, healthcare, and industrial domains.',
  strengths: [
    'Team collaboration & adaptability',
    'Complex problem-solving',
    'Cloud adoption & architecture',
    'Full-stack breadth (.NET + React/Angular)',
    'Test coverage discipline',
  ],
  personalTouch:
    'Outside of code: sci-fi enthusiast, board games, strategy games, and coin collecting.',
  rotatingRoles: ['.NET Engineer', 'React Developer', 'AWS Cloud Developer'],
  stats: [
    { label: 'Years Experience', value: '4+' },
    { label: 'Enterprise Domains', value: '3' },
    { label: 'Certifications', value: '3' },
  ],
  languages: [
    { name: 'Ukrainian', level: 'Native' },
    { name: 'English', level: 'Upper-Intermediate' },
  ],
} as const;
