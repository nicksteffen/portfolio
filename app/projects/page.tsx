// app/projects/page.tsx
"use client";

import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Divider,
  useTheme,
} from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import type { Project } from "@/types/project";

const projects: Project[] = getAllProjects();

export default function Projects() {
  const theme = useTheme();

  // Build a quick tech cloud from the "technologies" arrays (if present)
  const allTechs = Array.from(
    new Set(projects.flatMap((p: any) => p.technologies ?? [])),
  ).slice(0, 12);

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 800, letterSpacing: -0.5, mb: 1 }}
        >
          Projects
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 800, mx: "auto", lineHeight: 1.8 }}
        >
          Selected work spanning backend services, integrations, data workflows,
          and full‑stack apps.
        </Typography>

        {/* Optional technologies preview row */}
        {allTechs.length > 0 && (
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ mt: 2 }}
          >
            {allTechs.map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                variant="outlined"
                // Using the theme's primary color for consistency
                sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.text.secondary,
                }}
              />
            ))}
          </Stack>
        )}
      </Box>

      <Divider
        sx={{
          mb: { xs: 5, md: 7 },
          // Using the accent color for the divider
          borderColor: theme.palette.primary.main,
          opacity: 0.6,
        }}
      />

      {/* Stack of projects */}
      <Stack spacing={{ xs: 6, md: 8 }}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </Stack>

      {/* Footer / CTA */}
      <Box sx={{ textAlign: "center", mt: { xs: 8, md: 10 } }}>
        <Typography variant="body2" color="text.secondary">
          Want more details or a walkthrough? See the repository links in each
          card or reach out on LinkedIn.
        </Typography>
      </Box>
    </Container>
  );
}
