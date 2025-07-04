'use client';
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#526778', // A muted blue-gray
    },
    secondary: {
      main: '#b2dfdb', // A soft teal accent
    },
    background: {
      default: '#f5f5f5', // Light gray background
      paper: '#ffffff', // White paper background
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Using Roboto as a modern sans-serif font
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#222', // Darker color for better contrast
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#222', // Darker color for better contrast
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#444', // Darker color for better contrast
    },
    // Add more typography variants as needed, using darker colors for text
  },
  components: {
    // You can add component-specific overrides here
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Subtle shadow for cards
          borderRadius: '8px', // Rounded corners
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px', // Pill-shaped buttons
        },
      },
    },
  },
});

export default darkTheme;
