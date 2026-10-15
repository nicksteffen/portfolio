import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import skillsData from "@/data/skills.json";
import type { SkillCategory } from "@/types/content";

const skills = skillsData as SkillCategory[];

export default function Skills() {
  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Technical Expertise
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 3 }}>
        I bring hands-on experience with modern development stacks and
        methodologies:
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {skills.map((category) => (
          <Grid key={category.name} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
              {category.name}
            </Typography>
            <Stack
              component="ul"
              spacing={0.5}
              sx={{ paddingLeft: 2, marginTop: 0 }}
            >
              {category.skills.map((skill) => (
                <Typography
                  component="li"
                  key={skill}
                  variant="body2"
                  sx={{ listStyleType: "disc" }}
                >
                  {skill}
                </Typography>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
