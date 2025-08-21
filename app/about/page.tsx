// app/about/page.tsx
"use client";

import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
  Stack,
  Button,
  useTheme,
  alpha,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import NextLink from "next/link";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
import Skills from "../components/aboutSections/Skills";
import ExperienceSection from "../components/aboutSections/ExperienceSection";
import Profile from "../components/aboutSections/Profile";

export default function About() {
  const theme = useTheme();

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 5, md: 8 },
        // Set the background color to the main background from the theme
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
        <Profile />

        <Grid size={{ xs: 12, md: 8 }} sx={{ display: "flex" }}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 2,
              // Use the accent color for the border
              border: `1px solid ${theme.palette.primary.main}`,
              // Set the background to the "paper" color from the theme
              bgcolor: theme.palette.background.paper,
            }}
          >
            <CardContent sx={{ p: { xs: 2.5, md: 4 } }}>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                  About Me
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Full stack engineer focused on dependable systems and real
                  world impact
                </Typography>
              </Box>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mb: 4 }}
                useFlexGap
              >
                <Button
                  component={NextLink}
                  href="mailto:youremail@example.com"
                  startIcon={<Email />}
                  variant="contained"
                >
                  Email
                </Button>
                <Button
                  component={NextLink}
                  href="https://www.linkedin.com/in/your-handle"
                  startIcon={<LinkedIn />}
                  variant="outlined"
                >
                  LinkedIn
                </Button>
                <Button
                  component={NextLink}
                  href="https://github.com/your-handle"
                  startIcon={<GitHub />}
                  variant="text"
                >
                  GitHub
                </Button>
              </Stack>

              <Typography variant="h6" sx={{ mb: 1.5 }}>
                Professional Profile
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                I am a software engineer with over 7 years of experience across
                backend and full stack development. I work primarily with
                Python, Java, and modern web frameworks like Next.js and Vue.js.
                My motivation is to build resilient, maintainable systems that
                make a tangible difference, especially in healthcare, non
                profits, and social good.
              </Typography>

              <Box
                sx={{
                  // Use the secondary color for the "Recent Experience" box background
                  backgroundColor: theme.palette.secondary.main,
                  p: 2.5,
                  borderRadius: 2,
                  mb: 4,
                  // Use the accent color for the border
                  border: `1px solid ${theme.palette.primary.main}`,
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  Recent Experience
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  At ClearlyRated I built scalable web applications, data
                  integrations, and internal tooling to improve reliability and
                  developer velocity. Previously at Raytheon I contributed to
                  high performance systems, strengthening my focus on
                  correctness, testing, and operational rigor.
                </Typography>
              </Box>

              <ExperienceSection />

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" sx={{ mb: 1.5 }}>
                  Why Work With Me
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                  I combine mathematical problem solving with pragmatic
                  engineering. I focus on clean interfaces, thoughtful
                  abstractions, and observability so teams can move quickly
                  without surprises. I learn fast, communicate clearly, and care
                  about the people and processes around the code.
                </Typography>

                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                  I am exploring roles where I can apply my skills to impactful
                  challenges. I am especially excited about AI assisted tooling,
                  data driven products, and platforms that remove friction in
                  healthcare and social services.
                </Typography>
              </Box>

              <Divider sx={{ my: 4 }} />

              <Box sx={{ mb: 1.5 }}>
                <Typography variant="h6">Skills</Typography>
              </Box>
              <Skills />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
