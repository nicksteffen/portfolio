import React from 'react';
import { Container, Typography, Button, Box, AppBar, Toolbar } from '@mui/material';

export default function Home() {


    return (
        <>

        <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
            <Typography variant="h3" gutterBottom>
                Nicholas Steffen
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
                Software Engineer | Full-Stack Developer
            </Typography>
        <Box mt={3}>
          <Button variant="contained" color="primary" href="portfolio/resume.pdf" target="_blank" >
            Download Resume
          </Button>
        </Box>
      </Container>

        
        
        </>
    )
}