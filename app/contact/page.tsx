// app/contact/page.tsx
import { Box, Typography, Stack, Divider } from "@mui/material";
import SocialButtons from "../components/SocialButtons";
import GradientHero from "../components/GradientHero";
import ToptalBadge from "../components/ToptalBadge";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <GradientHero>
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          py: 8,
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Let&apos;s <Box component="span" color="primary.main">Connect</Box>
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            color="text.secondary"
            sx={{
              mb: 6,
              fontWeight: 400,
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            The best way to reach me is through my professional networks. Feel
            free to connect or message me on any platform.
          </Typography>

          <Box
            sx={{
              mb: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ mb: 4 }}>
              Choose your preferred platform:
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              alignItems="center"
            >
              <SocialButtons />
            </Stack>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 6 }}>
            {siteConfig.location} • {siteConfig.phone} • {siteConfig.email}
          </Typography>

          <Box sx={{ mb: 8, display: "flex", justifyContent: "center" }}>
            <ToptalBadge />
          </Box>

          <Divider sx={{ my: 6, mx: "auto", width: "80%" }} />

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontStyle: "italic", maxWidth: "500px", mx: "auto" }}
          >
            I typically respond within 24-48 hours. Looking forward to our
            conversation!
          </Typography>
        </Box>
      </Box>
    </GradientHero>
  );
}
