"use client";
import { useMediaQuery } from "@mui/material";
import MobileNavBar from "./MobileNavBar";
import TopNavBar from "./TopNavBar";

export default function NavBar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="w-full flex-none md:w-64">
      {isMobile ? <MobileNavBar /> : <TopNavBar />}
    </div>
  );
}
