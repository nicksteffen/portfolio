import { Box, Typography, Divider, Stack } from "@mui/material";
import experienceData from "@/data/experience.json";
import type { Experience } from "@/types/content";

const experiences = experienceData as Experience[];

export default function ExperienceSection() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
        Professional Experience
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <Stack spacing={4}>
        {experiences.map((exp, index) => (
          <Box key={`${exp.company}-${index}`}>
            <Typography variant="h6" component="div">
              {exp.role} | {exp.company}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {exp.period} • {exp.location}
            </Typography>

            <Box
              component="ul"
              sx={{
                pl: 2.5,
                mt: 1.5,
                "& li": {
                  mb: 1,
                  typography: "body1",
                },
              }}
            >
              {exp.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
