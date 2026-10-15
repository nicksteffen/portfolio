// portfolio/app/components/MobileNavBar.tsx
"use client";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { navPages } from "@/lib/site";

export default function MobileNavBar() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

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

        <IconButton
          onClick={() => setShowMenu(!showMenu)}
          aria-label={showMenu ? "Close menu" : "Open menu"}
          aria-expanded={showMenu}
          sx={{
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box
          component="nav"
          aria-label="Mobile"
          sx={{
            display: showMenu ? "block" : "none",
            position: "absolute",
            top: 64,
            left: 0,
            width: "100%",
            backgroundColor: "background.paper",
            boxShadow: 2,
            zIndex: 1000,
          }}
        >
          <List>
            {navPages.map((page) => (
              <ListItem key={page} disablePadding>
                <ListItemButton
                  onClick={() => {
                    router.push(`/${page.toLowerCase()}`);
                    setShowMenu(false);
                  }}
                >
                  <ListItemText primary={page} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
