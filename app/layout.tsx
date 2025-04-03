import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';


//import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './src/theme';
import TopNavBar from "./components/TopNavBar";
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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <AppRouterCacheProvider>
          <ThemeProvider theme={darkTheme}>
            <div className="w-full flex-none md:w-64">
                <TopNavBar/>
              {/* <SideNav /> */}
            </div>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}