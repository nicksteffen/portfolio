import { Box, Typography, Button, Stack } from "@mui/material";
import NextLink from "next/link";
import Grid from "@mui/material/Grid2";
import SocialButtons from "../SocialButtons";
import TechStackViz from "../TechStackViz";

export default function Hero() {
  return (
    <Grid
      container
      spacing={{ xs: 4, md: 6 }}
      alignItems="stretch"
      sx={{ minHeight: "60vh" }}
    >
      <Grid size={{ xs: 12, md: 6 }} alignSelf="center">
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontWeight: 800, mb: 1.5, lineHeight: 1.15, letterSpacing: -0.5 }}
        >
          Hi, I’m <Box component="span" color="primary.main">Nick</Box>.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          color="text.secondary"
          sx={{ mb: 3, maxWidth: 720 }}
        >
          Full-stack developer focused on building reliable systems that
          create real-world impact.
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
          people who use it. With 10+ years across backend and full-stack work,
          I’ve modernized services, built data integrations, and improved
          developer experience so teams can deliver faster with fewer
          surprises. Currently consulting as a lead full-stack engineer on
          serverless platforms, I focus on work that supports social good,
          healthcare, and equity, where thoughtful technology can make a
          tangible difference.
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

      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            position: "relative",
            height: "100%",
            minHeight: 420,
            borderRadius: 4,
            overflow: "hidden",
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            p: 3,
          }}
        >
          <TechStackViz />
        </Box>
      </Grid>
    </Grid>
  );
}
