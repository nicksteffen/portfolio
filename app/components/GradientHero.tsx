 "use client";
import { Box } from "@mui/material";
import type { ReactNode } from "react";

// Starry-night hero wrapper: deep-night gradient + subtle moon/wheat glow.
// Replaces the duplicated linear-gradient Boxes in page.tsx and contact/page.tsx.
export default function GradientHero({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.background.default} 0%, #0f162e 100%)`,
        "&::before": {
          content: '""',
          position: "absolute",
          top: -120,
          right: -80,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(214,182,136,0.14) 0%, rgba(214,182,136,0) 65%)",
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -160,
          left: -100,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(120,148,204,0.12) 0%, rgba(120,148,204,0) 65%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
    </Box>
  );
}
