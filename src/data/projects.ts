export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

// TODO: add projects
export const projects: Project[] = [];

// Future candidates from GitHub (reference only — do not render until populated):
// EventsExpress
// RecordBook.Microservice.VisitorsTracker
// RecordBook.Microservice.Notification
// FindCVBot
// FurnitureStore
// MebelOnline
