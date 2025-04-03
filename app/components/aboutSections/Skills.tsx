import { Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Add this line to import Grid

type SkillType = {
    name: string;
    skills: string[];
}

export default function Skills() {
    // todo pull this out of the code at some point
    const skillsData: SkillType[] = [
        {
            name: "Languages",
            skills: ["Java", "TypeScript", "JavaScript", "Python", "C++"]
        },
        {
            name: "Frontend",
            skills: ["React", "Vue.js", "HTML5", "CSS3"]
        },
        {
            name: "Backend", 
            skills: ["Node.js", "Express", "Flask", "Django", "Quart"]
        },
        {
            name: "Databases",
            skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"]
        },
        {
            name: "DevOps",
            skills: ["Docker", "Ansible", "CI/CD", "ElasticSearch"]
        },
        {
            name: "Methodologies",
            skills: ["Agile", "TDD", "System Design"]
        }
    ];



    return (
        <>
            <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Technical Expertise
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                I bring hands-on experience with modern development stacks and methodologies:
            </Typography>
            {/* Skills Grid */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
                {skillsData.map((category) => (
                    <Grid size={{xs:12, sm:6, md:4, lg:3}}>
                    <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                        {category.name}
                    </Typography>
                    <Stack spacing={0.5}>
                        {category.skills.map((skill) => (
                            <Typography key={skill} variant="body2">
                                • {skill}
                            </Typography>
                        ))}
                    </Stack>
                    </Grid>
                ))}

            </Grid>

        </>
    )
}