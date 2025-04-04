'use client';

import { Box, Typography, Divider, Stack } from '@mui/material';

type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      role: "Software Engineer",
      company: "ClearlyRated",
      period: "2021–2024",
      location: "Portland, OR (remote)",
      highlights: [
        "Built full-stack web applications with Vue.js and Java",
        "Dockerized MySQL database for developer environments",
        "Developed Java backend controllers using modern design patterns",
        "Extended CSV parsing tool for database contacts",
        "Migrated website from Flask to Quart for async support"
      ]
    },
    {
      role: "Software Engineer II",
      company: "Raytheon",
      period: "2018–2021",
      location: "Portsmouth, RI",
      highlights: [
        "Developed Python monitoring system for hardware devices",
        "Created Python/Redis interface with legacy Java code",
        "Implemented SQL query modules for device statistics",
        "Contributed to Java to C++ codebase conversion"
      ]
    }
  ];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
        Professional Experience
      </Typography>
      <Divider sx={{ mb: 3 }} />
      
      <Stack spacing={4}>
        {experiences.map((exp, index) => (
          <Box key={index}>
            <Typography variant="h6" component="div">
              {exp.role} | {exp.company}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {exp.period} • {exp.location}
            </Typography>
            
            <Box component="ul" sx={{ 
              pl: 2.5,
              mt: 1.5,
              '& li': { 
                mb: 1,
                typography: 'body1'
              }
            }}>
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