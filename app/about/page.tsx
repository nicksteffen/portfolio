// app/about/page.tsx
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import NextLink from "next/link";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
import Skills from "../components/aboutSections/Skills";
import ExperienceSection from "../components/aboutSections/ExperienceSection";
import Profile from "../components/aboutSections/Profile";
import { siteConfig } from "@/lib/site";

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
      <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
        <Profile />

        <Grid size={{ xs: 12, md: 8 }} sx={{ display: "flex" }}>
          <Card
            sx={{
              height: "100%",
              borderRadius: 4,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
              "&:hover": { borderColor: "primary.main" },
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
                  href={`mailto:${siteConfig.email}`}
                  startIcon={<Email />}
                  variant="contained"
                >
                  Email
                </Button>
                <Button
                  component={NextLink}
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<LinkedIn />}
                  variant="outlined"
                >
                  LinkedIn
                </Button>
                <Button
                  component={NextLink}
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
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
                I am a software engineer with 10+ years of experience across
                backend and full stack development in SaaS environments. I work
                primarily with Python, Java, and modern web frameworks like
                Next.js, React, and Vue.js, with a focus on API integrations,
                automated testing, and internal tooling. My motivation is to
                build resilient, maintainable systems that make a tangible
                difference, especially in healthcare, non profits, and social
                good.
              </Typography>

              <Box
                sx={{
                  backgroundColor: "secondary.main",
                  p: 2.5,
                  borderRadius: 2,
                  mb: 4,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  Recent Experience
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  As an independent consultant I architect serverless backends
                  (Supabase, PostgreSQL) and lead launch operations for
                  high-traffic products. At ClearlyRated I modernized backends,
                  built agnostic API integration models for CRMs like
                  Salesforce, and created Dockerized developer tooling.
                  Previously at Raytheon I contributed to high performance
                  monitoring systems, strengthening my focus on correctness,
                  testing, and operational rigor.
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
