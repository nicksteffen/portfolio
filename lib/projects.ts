import projectsData from '@/data/projects.json';
import { Project } from '@/types/project';

export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

export function getProjectById(id: string): Project | undefined {
  return getAllProjects().find((project) => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  return getAllProjects().filter(
    (project) => project.category?.toLowerCase() === category.toLowerCase()
  );
}