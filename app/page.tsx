// app/page.tsx
import { Box, Divider } from "@mui/material";
import GradientHero from "./components/GradientHero";
import Hero from "./components/home/Hero";
import FocusAreas from "./components/home/FocusAreas";
import RecentWork from "./components/home/RecentWork";

export default function Home() {
  return (
    <GradientHero>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 2, md: 6 },
          py: { xs: 6, md: 10 },
        }}
      >
        <Hero />
        <FocusAreas />
        <Divider sx={{ my: { xs: 8, md: 10 } }} />
        <RecentWork />
      </Box>
    </GradientHero>
  );
}
