import { Box, Typography, Button, Chip } from "@mui/material";
import NextLink from "next/link";
import Grid from "@mui/material/Grid2";
import InfoCard from "../InfoCard";

export default function RecentWork() {
  return (
    <>
      <Box>
        <Typography variant="h4" component="h3" sx={{ mb: 2, textAlign: "center" }}>
          Recent Work
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, textAlign: "center", maxWidth: 900, mx: "auto" }}
        >
          A few highlights that showcase my approach to reliability,
          integrations, and DX.
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <InfoCard
              eyebrow="Full-Stack CSV Ingestion"
              title="Predictable, resilient data onboarding"
              action={
                <Button component={NextLink} href="/projects" size="small">
                  Learn more
                </Button>
              }
            >
              Built a Vue, Java, and MySQL flow to upload, validate, and
              process contact data with clear errors and retries.
            </InfoCard>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <InfoCard
              eyebrow="Integration Architecture"
              title="Agnostic API layers for CRMs"
              action={
                <Button component={NextLink} href="/projects" size="small">
                  Learn more
                </Button>
              }
            >
              Standardized mappings and filters enabled quick onboarding of
              platforms like Salesforce and Microsoft Dynamics.
            </InfoCard>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ mt: { xs: 8, md: 10 } }}>
        <Typography variant="h4" component="h3" sx={{ mb: 3, textAlign: "center" }}>
          What I Work With
        </Typography>
        <Grid container spacing={1.5} justifyContent="center">
          {["Java", "TypeScript", "Python", "React", "Node.js", "Docker"].map(
            (tech) => (
              <Grid key={tech}>
                <Chip
                  label={tech}
                  variant="outlined"
                  size="medium"
                  sx={{ px: 2, py: 1.25, fontSize: "0.95rem" }}
                />
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </>
  );
}
