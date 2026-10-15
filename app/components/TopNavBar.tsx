"use client";
import { AccountCircle } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { navPages } from "@/lib/site";

function NavButton({
  label,
  href,
  active,
  onNavigate,
}: {
  label: string;
  href: string;
  active: boolean;
  onNavigate: (href: string) => void;
}) {
  return (
    <Button
      onClick={() => onNavigate(href)}
      aria-current={active ? "page" : undefined}
      size="large"
      sx={{
        mx: 0.5,
        fontWeight: active ? 700 : 500,
        letterSpacing: "0.02857em",
        textTransform: "uppercase",
        color: active ? "primary.main" : "text.secondary",
        borderBottom: "2px solid",
        borderColor: active ? "primary.main" : "transparent",
        borderRadius: 0,
        pb: 0.5,
        "&:hover": {
          color: "primary.main",
          backgroundColor: "transparent",
          borderColor: "primary.main",
        },
      }}
    >
      {label}
    </Button>
  );
}

export default function TopNavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const navigate = (href: string) => router.push(href);
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href) ?? false;

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "background.paper",
        color: "text.primary",
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
          <IconButton
            onClick={() => navigate("/")}
            aria-label="Go to homepage"
            sx={{
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            <AccountCircle fontSize="large" sx={{ color: "text.primary" }} />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            My Portfolio
          </Typography>
        </Box>

        <Box
          component="nav"
          aria-label="Primary"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <NavButton
            label="Home"
            href="/"
            active={isActive("/")}
            onNavigate={navigate}
          />
          {navPages.map((page) => {
            const href = `/${page.toLowerCase()}`;
            return (
              <NavButton
                key={page}
                label={page}
                href={href}
                active={isActive(href)}
                onNavigate={navigate}
              />
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
