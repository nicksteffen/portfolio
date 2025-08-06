// app/page.tsx
"use client";

import {
  Box,
  Typography,
  Button,
  Stack,
  useTheme,
  Chip,
  Divider,
} from "@mui/material";
import NextLink from "next/link";
import SocialButtons from "./components/SocialButtons";
import Grid from "@mui/material/Grid2";
import TechStackViz from "./components/TechStackViz";

export default function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
        background:
          theme.palette.mode === "dark"
            ? "radial-gradient(circle at center, #1a1a1a 0%, #0f0f0f 100%)"
            : "radial-gradient(circle at center, #fafafa 0%, #eeeeee 100%)",
      }}
    >
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="stretch"
        minHeight="60vh"
      >
        {/* Left Column - Intro */}
        <Grid size={{ xs: 12, md: 6 }} alignSelf="center">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 800,
              mb: 1.5,
              lineHeight: 1.15,
              letterSpacing: -0.5,
            }}
          >
            Hi, I’m{" "}
            <Box component="span" color="primary.main">
              Nick
            </Box>
            .
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            color="text.secondary"
            sx={{ mb: 3, maxWidth: 720 }}
          >
            Full‑stack developer focused on building reliable systems that
            create real‑world impact.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              mb: 3,
              fontSize: { xs: "1.05rem", md: "1.15rem" },
              lineHeight: 1.8,
              maxWidth: 760,
            }}
          >
            I design and ship scalable, maintainable software with care for the
            people who use it. With 7+ years across backend and full‑stack work,
            I’ve modernized services, built data integrations, and improved
            developer experience so teams can deliver faster with fewer
            surprises. Lately, I’ve been channeling that experience into work
            that supports social good, healthcare, and equity, where thoughtful
            technology can make a tangible difference.
          </Typography>

          <Stack direction="row" spacing={2} sx={{ mb: 3, flexWrap: "wrap" }}>
            <Button
              component={NextLink}
              href="/projects"
              variant="contained"
              size="large"
            >
              View Projects
            </Button>
            <Button
              component={NextLink}
              href="/about"
              variant="outlined"
              size="large"
            >
              About Me
            </Button>
            <Button
              component={NextLink}
              href="/contact"
              variant="text"
              size="large"
              sx={{ ml: { xs: 0, sm: 1 } }}
            >
              Get in Touch
            </Button>
          </Stack>

          <Stack direction="row" spacing={2}>
            <SocialButtons />
          </Stack>
        </Grid>

        {/* Right Column - Visual Element */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              height: "100%",
              minHeight: 420,
              borderRadius: 4,
              overflow: "hidden",
              bgcolor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.03)"
                  : "rgba(0,0,0,0.04)",
              border: `1px solid ${theme.palette.divider}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0 10px 30px rgba(0,0,0,0.5)"
                  : "0 10px 30px rgba(0,0,0,0.1)",
            }}
          >
            <TechStackViz />
          </Box>
        </Grid>
      </Grid>

      {/* Focus Areas */}
      <Box sx={{ mt: { xs: 8, md: 10 } }}>
        <Typography
          variant="h4"
          component="h3"
          sx={{ mb: 2, textAlign: "center" }}
        >
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
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                border: `1px solid ${theme.palette.divider}`,
                bgcolor:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(0,0,0,0.02)",
                height: "100%",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                Scalable Backends
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Async services, resilient data models, and clean interfaces that
                are easy to evolve and troubleshoot.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                border: `1px solid ${theme.palette.divider}`,
                bgcolor:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(0,0,0,0.02)",
                height: "100%",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                Integrations that Last
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Robust API layers and mapping strategies for CRMs and
                third‑party services that scale with the product.
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                border: `1px solid ${theme.palette.divider}`,
                bgcolor:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(0,0,0,0.02)",
                height: "100%",
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                Developer Experience
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Containerized environments, reliable tests, and observability
                that empower teams to move confidently.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: { xs: 8, md: 10 } }} />

      {/* Recent Work Preview */}
      <Box>
        <Typography
          variant="h4"
          component="h3"
          sx={{ mb: 2, textAlign: "center" }}
        >
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
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                border: `1px solid ${theme.palette.divider}`,
                bgcolor:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(0,0,0,0.02)",
                height: "100%",
              }}
            >
              <Typography variant="subtitle2" color="primary" sx={{ mb: 0.5 }}>
                Full‑Stack CSV Ingestion
              </Typography>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Predictable, resilient data onboarding
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.5 }}
              >
                Built a `Vue`, `Java`, and `MySQL` flow to upload, validate, and
                process contact data with clear errors and retries.
              </Typography>
              <Button
                component={NextLink}
                href="/projects#csv-ingestion"
                size="small"
              >
                Learn more
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                p: 3,
                borderRadius: 3,
                border: `1px solid ${theme.palette.divider}`,
                bgcolor:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.03)"
                    : "rgba(0,0,0,0.02)",
                height: "100%",
              }}
            >
              <Typography variant="subtitle2" color="primary" sx={{ mb: 0.5 }}>
                Integration Architecture
              </Typography>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Agnostic API layers for CRMs
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 1.5 }}
              >
                Standardized mappings and filters enabled quick onboarding of
                platforms like Salesforce and Microsoft Dynamics.
              </Typography>
              <Button
                component={NextLink}
                href="/projects#integrations"
                size="small"
              >
                Learn more
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Skills Preview */}
      <Box sx={{ mt: { xs: 8, md: 10 } }}>
        <Typography
          variant="h4"
          component="h3"
          sx={{ mb: 3, textAlign: "center" }}
        >
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
                  sx={{
                    px: 2,
                    py: 1.25,
                    fontSize: "0.95rem",
                  }}
                />
              </Grid>
            ),
          )}
        </Grid>
      </Box>
    </Box>
  );
}
