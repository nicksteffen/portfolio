// src/theme.ts
"use client";
import { createTheme } from "@mui/material/styles";

// Define the color palette for your old portfolio
const oldPortfolioPalette = {
  accent: "#B28D3D",
  aboutBg: "#D6B688",
  skillsBg: "#7894cc",
  portfolioBg: "#324378",
  contactBg: "#171f35",
  textPrimary: "#FFFFFF",
  textSecondary: "rgba(255, 255, 255, 0.8)",
  starryBlue: "#38587A", // A new color inspired by "Starry Night"
};

// Your original dark theme
export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#526778", // A muted blue-gray
    },
    secondary: {
      main: "#b2dfdb", // A soft teal accent
    },
    background: {
      default: "#f5f5f5", // Light gray background
      paper: "#ffffff", // White paper background
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#222",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#222",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#444",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          borderRadius: "8px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
        },
      },
    },
  },
});

// The new, refined theme with your old portfolio's colors
export const oldPortfolioTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: oldPortfolioPalette.accent, // Gold accent for primary actions
    },
    secondary: {
      main: oldPortfolioPalette.starryBlue, // New "Starry Night" inspired blue
    },
    background: {
      default: oldPortfolioPalette.portfolioBg, // Dark blue/gray background
      paper: oldPortfolioPalette.contactBg, // Darker paper-like surfaces
    },
    text: {
      primary: oldPortfolioPalette.textPrimary, // Pure white for headings
      secondary: oldPortfolioPalette.textSecondary, // Off-white for body text
    },
    // Adding custom colors to the palette for easier access
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: oldPortfolioPalette.textPrimary, // Use pure white for headings
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: oldPortfolioPalette.textPrimary, // Use pure white for headings
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: oldPortfolioPalette.textSecondary, // Use off-white for body text
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          border: `1px solid ${oldPortfolioPalette.accent}`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
        },
        contained: {
          backgroundColor: oldPortfolioPalette.accent,
          color: oldPortfolioPalette.textPrimary,
          "&:hover": {
            backgroundColor: oldPortfolioPalette.starryBlue, // Hover effect with new blue
          },
        },
        outlined: {
          color: oldPortfolioPalette.textSecondary,
          borderColor: oldPortfolioPalette.accent,
          "&:hover": {
            backgroundColor: "rgba(178, 141, 61, 0.1)", // Subtle hover for outlined buttons
          },
        },
      },
    },
  },
});
