export type Project = {
    id: string;
    title: string;
    description: string;
    image?: string; // URL or path to image
    technologies: string[];
    demoUrl?: string; // URL to live project
    githubUrls: string[]; // Array of GitHub repo URLs
    category: string;
  };