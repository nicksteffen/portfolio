import projectsData from '@/data/projects.json';
import { Project } from '@/types/project';

export function getAllProjects(): Project[] {
  const { order, projects } = projectsData as { order?: string[]; projects: Project[] };
  
  if (!order || !Array.isArray(order)) {
    return projects;
  }
  
  // Create a map for quick lookup
  const projectMap = new Map<string, Project>(
    projects.map((p) => [p.id, p])
  );
  
  const orderedProjects: Project[] = [];
  
  // Add projects in the order specified
  order.forEach((id) => {
    const project = projectMap.get(id);
    if (project) {
      orderedProjects.push(project);
    }
  });
  
  return orderedProjects;
}

export function getProjectById(id: string): Project | undefined {
  return getAllProjects().find((project) => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  return getAllProjects().filter(
    (project) => project.category?.toLowerCase() === category.toLowerCase()
  );
}
