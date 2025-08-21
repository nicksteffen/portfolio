// portfolio/app/components/MobileNavBar.tsx
"use client";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MobileNavBar() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const pages = ["About", "Projects", "Contact"];
  const portfolioBgColor = "#324378";

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "background.paper",
        boxShadow: "none",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar
        sx={{
          px: 3,
          minHeight: 64,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", cursor: "pointer" }}
            onClick={() => router.push("/")}
          >
            My Portfolio
          </Typography>
        </Box>

        <>
          {/* Mobile menu button */}
          <MenuIcon
            onClick={() => setShowMenu(!showMenu)}
            sx={{
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
          />

          {/* Mobile menu */}
          <Box
            component="nav"
            sx={{
              display: showMenu ? "block" : "none",
              position: "absolute",
              top: 64,
              left: 0,
              width: "100%",
              background: portfolioBgColor, // Use the theme color for background
              boxShadow: 2,
              zIndex: 1000,
            }}
          >
            <List>
              {pages.map((page) => (
                <ListItem key={page} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      router.push(`/${page.toLowerCase()}`);
                      setShowMenu(false); // Close the menu after clicking
                    }}
                  >
                    <ListItemText primary={page} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </>
      </Toolbar>
    </AppBar>
  );
}
