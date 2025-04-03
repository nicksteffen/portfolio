import Grid from "@mui/material/Grid2"
import { Container, Typography } from "@mui/material";
import { Project } from "@/types/project";
import ProjectCard from "../components/ProjectCard";
import { getAllProjects } from "@/lib/projects";



const projects : Project[] = getAllProjects();

export default function Projects() {
    return (
        <>
            <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
                <Typography variant="h3" gutterBottom>Projects</Typography>
                <Typography variant="body1">Here are some of the projects I have worked on, including open-source contributions and personal projects.</Typography>
                <Grid container spacing={3}>
                    {projects.map((project) => (
                        // <Grid  key={project.id} xs={12} sm={6} md={4}>
                        <Grid  key={project.id}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </>
    )
}