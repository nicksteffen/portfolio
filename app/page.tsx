// app/page.tsx
'use client';

import { Box, Typography, Button, Stack, useTheme, Chip } from '@mui/material';
import NextLink from 'next/link';
import SocialButtons from './components/SocialButtons';
import Grid from "@mui/material/Grid2"
import TechStackViz from './components/TechStackViz';

export default function Home() {
  const theme = useTheme();

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      px: { xs: 2, md: 6 },
      py: 8,
      background: theme.palette.mode === 'dark' 
        ? 'radial-gradient(circle at center, #1a1a1a 0%, #121212 100%)' 
        : 'radial-gradient(circle at center, #f9f9f9 0%, #eaeaea 100%)'
    }}>
      <Grid container spacing={6} alignItems="stretch" height={'100%'}  minHeight={'60vh'}>
        {/* Left Column - Intro */}
        <Grid size={{xs:12, md:6}} alignSelf={"center"}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: 700,
              mb: 2,
              lineHeight: 1.2
            }}
          >
            Hi, I'm <Box component="span" color="primary.main">Nick!</Box>
          </Typography>
          
          <Typography 
            variant="h5" 
            component="h2" 
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Full-Stack Developer | Problem Solver
          </Typography>
          
          <Typography 
            variant="body1" 
            paragraph 
            sx={{ 
              mb: 4,
              fontSize: '1.1rem',
              lineHeight: 1.7
            }}
          >
            I’m a software engineer who thrives on solving complex problems—but over time, my focus has shifted 
            from just solving puzzles to making sure the problems I’m working on truly matter. 
            With 7+ years of experience in backend and full-stack development, I’ve built reliable, 
            scalable systems—but what drives me now is using those skills to create positive, real-world impact.

            I’m especially motivated by work that supports social good, healthcare, 
            and equity—spaces where thoughtful technology can make a difference in people’s lives. 
            Whether it’s optimizing systems or building tools from the ground up, I bring curiosity,
             care, and a deep commitment to understanding why we’re building something—not just how.

          </Typography>
          
          <Stack direction="row" spacing={2} sx={{ mb: 6 }}>
            <Button
              component={NextLink}
              href="/projects"
              variant="contained"
              size="large"
            >
              View My Work
            </Button>
            <Button
              component={NextLink}
              href="/about"
              variant="outlined"
              size="large"
            >
              About Me
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <SocialButtons/>
          </Stack>
          

        </Grid>
        
        {/* Right Column - Visual Element */}
        <Grid size={{xs:12, md:6}}>
          <Box sx={{
            position: 'relative',
            height: '100%',
            minHeight: 400,
            borderRadius: 4,
            overflow: 'hidden',
            bgcolor: theme.palette.mode === 'dark' 
              ? 'rgba(255,255,255,0.05)' 
              : 'rgba(0,0,0,0.05)',
            border: `1px solid ${theme.palette.divider}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <TechStackViz/>
          </Box>
        </Grid>
      </Grid>
      
      {/* Skills Preview */}
      <Box sx={{ mt: 12 }}>
        <Typography variant="h4" component="h3" sx={{ mb: 4, textAlign: 'center' }}>
          What I Work With
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {['Java', 'TypeScript', 'Python', 'React', 'Node.js', 'Docker'].map((tech) => (
            <Grid key={tech}>
              <Chip 
                label={tech}
                variant="outlined"
                size="medium"
                sx={{ 
                  px: 2,
                  py: 1.5,
                  fontSize: '1rem'
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}