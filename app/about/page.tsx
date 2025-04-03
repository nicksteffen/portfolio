import { Container, Typography } from "@mui/material";



export default function About() {
    return (
        <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h3" gutterBottom>About Me</Typography>
        <Typography variant="body1">I am a software engineer with a passion for building impactful applications. With over 7 years of experience, I specialize in full-stack development and problem-solving.</Typography>
      </Container>
    )
}