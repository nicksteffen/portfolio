// Central theme — Starry Night palette (deep night + restrained gold).
// Keep all color decisions here; components must reference tokens, not hex literals.
"use client";
import { createTheme } from "@mui/material/styles";

export const starryNightPalette = {
  night: "#171f35", // page background — deep night navy
  nightDeep: "#0f162e", // hero gradient end
  sectionNavy: "#324378", // reserved for nav / feature sections
  starryBlue: "#38587a", // secondary actions, links
  periwinkle: "#7894cc", // info / tertiary accent
  gold: "#b28d3d", // primary accent — stars/moon (use sparingly)
  goldDark: "#8f6f2e",
  wheat: "#d6b688", // warm subheadings / moon glow
  textPrimary: "#ffffff",
  textSecondary: "rgba(255, 255, 255, 0.72)",
  cardBorder: "rgba(178, 141, 61, 0.22)",
  cardHoverBorder: "#b28d3d",
} as const;

export const portfolioTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: starryNightPalette.gold,
      dark: starryNightPalette.goldDark,
      light: starryNightPalette.wheat,
    },
    secondary: {
      main: starryNightPalette.starryBlue,
    },
    info: {
      main: starryNightPalette.periwinkle,
    },
    background: {
      default: starryNightPalette.night,
      paper: "#1e2947",
    },
    text: {
      primary: starryNightPalette.textPrimary,
      secondary: starryNightPalette.textSecondary,
    },
    divider: starryNightPalette.cardBorder,
  },
  typography: {
    fontFamily:
      'var(--font-geist-sans), "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3rem",
      fontWeight: 800,
      letterSpacing: -1,
      color: starryNightPalette.textPrimary,
      "@media (max-width:600px)": { fontSize: "2.5rem" },
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      letterSpacing: -0.5,
      color: starryNightPalette.textPrimary,
    },
    subtitle1: {
      color: starryNightPalette.wheat,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      color: starryNightPalette.textSecondary,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
          borderRadius: 16,
          border: `1px solid ${starryNightPalette.cardBorder}`,
          backgroundColor: "#1e2947",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: "none",
          fontWeight: 600,
        },
        contained: {
          backgroundColor: starryNightPalette.gold,
          color: "#fff",
          boxShadow: `0 4px 14px rgba(178, 141, 61, 0.35)`,
          "&:hover": {
            backgroundColor: starryNightPalette.goldDark,
          },
        },
        outlined: {
          color: starryNightPalette.textSecondary,
          borderColor: starryNightPalette.cardBorder,
          "&:hover": {
            backgroundColor: "rgba(178, 141, 61, 0.08)",
            borderColor: starryNightPalette.gold,
          },
        },
        text: {
          color: starryNightPalette.wheat,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        outlined: {
          borderColor: starryNightPalette.cardBorder,
        },
      },
    },
  },
});
