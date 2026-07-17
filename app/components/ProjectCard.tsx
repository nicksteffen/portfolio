// app/components/ProjectCard.tsx
"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import NextLink from "next/link";
import { Project } from "@/types/project";
import { GitHub, Launch } from "@mui/icons-material";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const theme = useTheme();
  const isEven = index % 2 === 0;

  const cleanImagePath = project.image
    ? project.image.startsWith("/")
      ? project.image
      : `/${project.image}`
    : "";
  const imageUrl = cleanImagePath ? `/portfolio${cleanImagePath}` : "";

  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        overflow: "hidden",
        border: `1px solid ${theme.palette.divider}`,
        transition: "all 0.3s ease-in-out",
        background: "rgba(23, 31, 53, 0.4)",
        backdropFilter: "blur(8px)",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: `0 12px 24px rgba(0, 0, 0, 0.3), 0 0 15px ${theme.palette.primary.main}4D`,
          borderColor: theme.palette.primary.main,
        },
      }}
      variant="outlined"
    >
      <Grid container columns={12}>
        {/* Left or Right column for Image depending on index */}
        <Grid
          size={{ xs: 12, md: 6 }}
          order={{ xs: 1, md: isEven ? 1 : 2 }}
          sx={{
            position: "relative",
            overflow: "hidden",
            minHeight: { xs: 240, sm: 300, md: "100%" },
            display: "flex",
            alignItems: "stretch",
          }}
        >
          {imageUrl && (
            <Box
              component="img"
              src={imageUrl}
              alt={project.title}
              sx={{
                width: "100%",
                height: "100%",
                minHeight: { xs: 240, sm: 300, md: 360 },
                objectFit: "cover",
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: "scale(1.04)",
                },
              }}
            />
          )}
        </Grid>

        {/* Column for Details */}
        <Grid
          size={{ xs: 12, md: 6 }}
          order={{ xs: 2, md: isEven ? 2 : 1 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardContent
            sx={{
              p: { xs: 3, sm: 4, md: 5 },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              {/* Year and Category Badge Row */}
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
                <Chip
                  label={project.year}
                  size="small"
                  sx={{
                    bgcolor: "rgba(178, 141, 61, 0.15)",
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                    borderRadius: 1,
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.secondary",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  {project.category}
                </Typography>
              </Stack>

              {/* Title */}
              <Typography
                gutterBottom
                variant="h4"
                component="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.75rem", sm: "2rem" },
                  letterSpacing: -0.5,
                  mb: 2,
                }}
              >
                {project.title}
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  color: "text.secondary",
                  lineHeight: 1.7,
                  fontSize: "1.05rem",
                }}
              >
                {project.description}
              </Typography>

              {/* Tech Stack */}
              {project.technologies && (
                <Box sx={{ mb: 4 }}>
                  <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: "rgba(255, 255, 255, 0.05)",
                          color: "text.secondary",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          fontWeight: 500,
                          "&:hover": {
                            bgcolor: "rgba(255, 255, 255, 0.1)",
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              )}
            </Box>

            {/* Action Buttons */}
            <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap", gap: 1.5 }}>
              {project.demoUrl && (
                <Button
                  component={NextLink}
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  size="medium"
                  endIcon={<Launch sx={{ fontSize: "1.1rem" }} />}
                  sx={{
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    textTransform: "none",
                    boxShadow: `0 4px 14px ${theme.palette.primary.main}33`,
                  }}
                >
                  Live Demo
                </Button>
              )}

              {project.githubUrls?.map((url, idx) => (
                <Button
                  key={idx}
                  component={NextLink}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="medium"
                  startIcon={<GitHub sx={{ fontSize: "1.1rem" }} />}
                  sx={{
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    textTransform: "none",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "text.primary",
                    "&:hover": {
                      borderColor: theme.palette.primary.main,
                      bgcolor: "rgba(178, 141, 61, 0.05)",
                    },
                  }}
                >
                  {project.githubUrls.length > 1 ? `Repo ${idx + 1}` : "GitHub"}
                </Button>
              ))}
            </Stack>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}