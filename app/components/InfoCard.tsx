import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

// Replaces the 5x repeated card Box in app/page.tsx.
export default function InfoCard({
  eyebrow,
  title,
  children,
  action,
}: {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  action?: ReactNode;
}) {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 4,
        height: "100%",
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
        transition: "border-color 250ms ease, transform 250ms ease",
        "&:hover": { borderColor: "primary.main" },
      }}
    >
      {eyebrow && (
        <Typography variant="subtitle2" color="primary" sx={{ mb: 0.5 }}>
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h6" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: action ? 1.5 : 0 }}>
        {children}
      </Typography>
      {action}
    </Box>
  );
}
