// app/components/TechStackViz.tsx
"use client";

import { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Chip,
  Stack,
  useTheme,
  alpha,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import { FaJava, FaNodeJs, FaVuejs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiFastapi,
  SiReact,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiAnsible,
} from "react-icons/si";

type Category = "frontend" | "backend" | "devops" | "database" | "all";

type TechItem = {
  name: string;
  category: Exclude<Category, "all">;
  icon: JSX.Element;
};

const TECH: TechItem[] = [
  { name: "Python", category: "backend", icon: <SiPython /> },
  { name: "Java", category: "backend", icon: <FaJava /> },
  { name: "Node.js", category: "backend", icon: <FaNodeJs /> },
  { name: "FastAPI", category: "backend", icon: <SiFastapi /> },
  { name: "TypeScript", category: "frontend", icon: <SiTypescript /> },
  { name: "React", category: "frontend", icon: <SiReact /> },
  { name: "Vue.js", category: "frontend", icon: <FaVuejs /> },
  { name: "Next.js", category: "frontend", icon: <SiNextdotjs /> },
  { name: "Docker", category: "devops", icon: <SiDocker /> },
  { name: "Ansible", category: "devops", icon: <SiAnsible /> },
  { name: "PostgreSQL", category: "database", icon: <SiPostgresql /> },
  { name: "MongoDB", category: "database", icon: <SiMongodb /> },
];

export default function TechStackViz() {
  const theme = useTheme();
  const [filter, setFilter] = useState<Category>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return TECH;
    return TECH.filter((t) => t.category === filter);
  }, [filter]);

  const categoryColor = (category: TechItem["category"]) => {
    switch (category) {
      case "frontend":
        return theme.palette.primary.main;
      case "backend":
        return theme.palette.secondary.main;
      case "devops":
        return theme.palette.info.main;
      case "database":
        return theme.palette.success.main;
      default:
        return theme.palette.divider;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Optional header and filters */}
      <Stack spacing={2} sx={{ mb: 2, alignItems: "center" }}>
        <Typography variant="h6" component="h3">
          Tech I Work With
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          justifyContent="center"
        >
          {(
            ["all", "frontend", "backend", "devops", "database"] as Category[]
          ).map((c) => (
            <Chip
              key={c}
              label={c === "all" ? "All" : c[0].toUpperCase() + c.slice(1)}
              clickable
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
              color={filter === c ? "primary" : "default"}
              variant={filter === c ? "filled" : "outlined"}
              sx={{ textTransform: "capitalize" }}
            />
          ))}
        </Stack>
      </Stack>

      {/* Responsive, non-overlapping grid using Grid2 */}
      <Grid
        container
        spacing={2}
        columns={12}
        justifyContent="center"
        alignItems="stretch"
      >
        {filtered.map((tech) => {
          const col = categoryColor(tech.category);
          return (
            <Grid
              key={tech.name}
              size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
              sx={{ display: "flex" }} // lets the Paper stretch if you add height: '100%'
            >
              <Paper
                elevation={0}
                role="group"
                aria-label={`${tech.name} ${tech.category}`}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  gap: 1,
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? alpha("#ffffff", 0.03)
                      : alpha("#000000", 0.03),
                  border: `1px solid ${alpha(theme.palette.divider, 0.9)}`,
                  transition:
                    "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow:
                      theme.palette.mode === "dark"
                        ? "0 12px 32px rgba(0,0,0,0.5)"
                        : "0 12px 24px rgba(0,0,0,0.12)",
                    borderColor: col,
                  },
                }}
              >
                {/* Small accent bar that does not affect layout height */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 3,
                    background: alpha(col, 0.9),
                  }}
                />

                <Box
                  sx={{
                    fontSize: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: theme.palette.text.primary,
                    "& > svg": { width: 32, height: 32 },
                  }}
                >
                  {tech.icon}
                </Box>

                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {tech.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {tech.category}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
