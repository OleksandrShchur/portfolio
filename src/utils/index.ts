import { profile } from '@/data/profile';

export function getCvUrl(): string {
  return profile.cvPath;
}

export function downloadCv(): void {
  const link = document.createElement('a');
  link.href = getCvUrl();
  link.download = 'Oleksandr_Shchur_CV.pdf';
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (!element) return;

  const offset = 80;
  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
