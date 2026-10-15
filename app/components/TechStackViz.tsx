// app/components/TechStackViz.tsx
"use client";

import { useMemo, useState } from "react";
import {
  Box,
  Typography,
  Chip,
  Stack,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

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
import techStackData from "@/data/tech-stack.json";

type Category = "frontend" | "backend" | "devops" | "database" | "all";

const ICONS: Record<string, React.ReactNode> = {
  SiPython: <SiPython />,
  FaJava: <FaJava />,
  FaNodeJs: <FaNodeJs />,
  SiFastapi: <SiFastapi />,
  SiTypescript: <SiTypescript />,
  SiReact: <SiReact />,
  FaVuejs: <FaVuejs />,
  SiNextdotjs: <SiNextdotjs />,
  SiDocker: <SiDocker />,
  SiAnsible: <SiAnsible />,
  SiPostgresql: <SiPostgresql />,
  SiMongodb: <SiMongodb />,
};

type TechItem = {
  name: string;
  category: Exclude<Category, "all">;
  icon: string;
};

const TECH = techStackData as TechItem[];

export default function TechStackViz() {
  const [filter, setFilter] = useState<Category>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return TECH;
    return TECH.filter((t) => t.category === filter);
  }, [filter]);

  const categoryColor = (category: TechItem["category"]) => {
    switch (category) {
      case "frontend":
        return "primary.main";
      case "backend":
        return "secondary.main";
      case "devops":
        return "info.main";
      case "database":
        return "success.main";
      default:
        return "divider";
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
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
              sx={{ display: "flex" }}
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
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  transition:
                    "transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
                    borderColor: col,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 3,
                    background: (theme) => {
                      const palette = theme.palette as unknown as Record<
                        string,
                        { main: string }
                      >;
                      const key = (col as string).split(".")[0];
                      return palette[key]?.main ?? col;
                    },
                    opacity: 0.9,
                  }}
                />

                <Box
                  sx={{
                    fontSize: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "text.primary",
                    "& > svg": { width: 32, height: 32 },
                  }}
                >
                  {ICONS[tech.icon] ?? null}
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
