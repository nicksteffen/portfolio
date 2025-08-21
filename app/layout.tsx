import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";

//import { Roboto } from 'next/font/google';
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, oldPortfolioTheme } from "./src/theme";
// import TopNavBar from "./components/TopNavBar";
// import { useMediaQuery } from "@mui/material";
// import MobileNavBar from "./components/MobileNavBar";
import NavBar from "./components/NavBar";
// import SideNav from "./sidenav";

//const roboto = Roboto({
//  weight: ['300', '400', '500', '700'],
//  subsets: ['latin'],
//  display: 'swap',
//  variable: '--font-roboto',
//});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nick Steffen Portfolio",
  description: "All about me and what I've done!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={oldPortfolioTheme}>
            <CssBaseline />
            <NavBar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
