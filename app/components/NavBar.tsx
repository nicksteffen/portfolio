"use client";
import { Box } from "@mui/material";
import MobileNavBar from "./MobileNavBar";
import TopNavBar from "./TopNavBar";

export default function NavBar() {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Mobile Nav Bar - visible on screens smaller than md */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <MobileNavBar />
      </Box>

      {/* Desktop Top Nav Bar - visible on screens md and up */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <TopNavBar />
      </Box>
    </Box>
  );
}
