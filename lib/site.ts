// Single source of truth for contact links, profile, and nav.
// Update handles here once — SocialButtons, About, Contact, and Profile all read from this.

export const siteConfig = {
  name: "Nicholas Steffen",
  title: "Software Engineer | Full-Stack, Integrations & AI Tooling",
  tagline:
    "Software developer with 10+ years of experience in full-stack web development, integrations, and internal tooling in SaaS environments.",
  email: "nicksteffen94@gmail.com",
  phone: "+1 (516) 456-1214",
  location: "Warwick, RI",
  linkedin: "https://linkedin.com/in/nicholassteffen1",
  github: "https://github.com/nicksteffen",
  toptal: "https://www.toptal.com/developers/resume/nicholas-steffen#VaMngj",
  resumePath: "/portfolio/NicholasSteffenResume.pdf",
  profileImage: "/portfolio/images/profile.jpg",
} as const;

export const navPages = ["About", "Projects", "Contact"] as const;
