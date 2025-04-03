import React from 'react';
import { Container, Typography, Button, Box, AppBar, Toolbar } from '@mui/material';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Link href="/" passHref>
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/about" passHref>
            <Button color="inherit">About</Button>
          </Link>
          <Link href="/projects" passHref>
            <Button color="inherit">Projects</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button color="inherit">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h3" gutterBottom>
          Nicholas Steffen
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Software Engineer | Full-Stack Developer
        </Typography>
        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            href="/resume.pdf"
            target="_blank"
          >
            Download Resume
          </Button>
        </Box>
      </Container>
    </>
  );
};

const About = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" gutterBottom>About Me</Typography>
      <Typography variant="body1">I am a software engineer with a passion for building impactful applications. With over 7 years of experience, I specialize in full-stack development and problem-solving.</Typography>
    </Container>
  );
};

const Projects = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" gutterBottom>Projects</Typography>
      <Typography variant="body1">Here are some of the projects I have worked on, including open-source contributions and personal projects.</Typography>
    </Container>
  );
};

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" gutterBottom>Contact</Typography>
      <Typography variant="body1">Feel free to reach out to me via email at nicksteffen94@gmail.com or connect with me on my profiles below:</Typography>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          href="https://www.linkedin.com/in/nicholassteffen1/"
          target="_blank"
          sx={{ mr: 2 }}
        >
          LinkedIn
        </Button>
        <Button
          variant="contained"
          color="secondary"
          href="https://github.com/nicksteffen"
          target="_blank"
        >
          GitHub
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
export { About, Projects, Contact };