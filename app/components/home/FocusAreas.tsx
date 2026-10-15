import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import InfoCard from "../InfoCard";

const FOCUS_AREAS = [
  {
    title: "Scalable Backends",
    body: "Async services, resilient data models, and clean interfaces that are easy to evolve and troubleshoot.",
  },
  {
    title: "Integrations that Last",
    body: "Robust API layers and mapping strategies for CRMs and third-party services that scale with the product.",
  },
  {
    title: "Developer Experience",
    body: "Containerized environments, reliable tests, and observability that empower teams to move confidently.",
  },
] as const;

export default function FocusAreas() {
  return (
    <Box sx={{ mt: { xs: 8, md: 10 } }}>
      <Typography variant="h4" component="h3" sx={{ mb: 2, textAlign: "center" }}>
        What I’m Focused On
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4, textAlign: "center", maxWidth: 900, mx: "auto" }}
      >
        Building dependable systems, thoughtful developer tooling, and
        integrations that reduce friction for users and teams.
      </Typography>

      <Grid container spacing={3}>
        {FOCUS_AREAS.map((f) => (
          <Grid key={f.title} size={{ xs: 12, md: 4 }}>
            <InfoCard title={f.title}>{f.body}</InfoCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
