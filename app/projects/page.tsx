// app/projects/page.tsx
"use client";

import Grid from "@mui/material/Grid2";
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Divider,
  useTheme,
  alpha,
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
              <Chip key={t} label={t} size="small" variant="outlined" />
            ))}
          </Stack>
        )}
      </Box>

      <Divider
        sx={{
          mb: { xs: 4, md: 6 },
          borderColor: alpha(theme.palette.divider, 0.6),
        }}
      />

      {/* Grid of projects using Grid2 */}
      <Grid container spacing={{ xs: 2.5, md: 3 }} columns={12}>
        {projects.map((project) => (
          <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>

      {/* Footer / CTA */}
      <Box sx={{ textAlign: "center", mt: { xs: 6, md: 8 } }}>
        <Typography variant="body2" color="text.secondary">
          Want more details or a walkthrough? See the repository links in each
          card or reach out on LinkedIn.
        </Typography>
      </Box>
    </Container>
  );
}
