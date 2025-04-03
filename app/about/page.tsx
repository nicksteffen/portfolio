'use client'
import { 
    Box, 
    Card, 
    CardContent, 
    CardMedia, 
    Container, 
    Divider, 
    Typography,
    Chip,
    Stack,
    useTheme,
    Avatar,
    IconButton,
    // Grid
  } from "@mui/material";
  import { Email, LinkedIn, GitHub, Code, Work, School } from "@mui/icons-material";
  import NextLink from 'next/link';
import Grid from "@mui/material/Grid2"; // Add this line to import Grid
import Skills from "../components/aboutSections/Skills";
  
  export default function About() {
    const theme = useTheme();
    
    const skills = [
      "Python", "Java", "Next.js", "Vue.js", 
      "TypeScript", "React", "Node.js", "AI/ML",
      "Data Engineering", "Cloud Architecture"
    ];
  
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={2} alignItems="stretch">
          {/* Profile Section */}
          {/* xs={12} md={4}  */}
          <Grid sx={{ display: 'flex'}}  size={{xs: 12, md: 4 }} >
            <Card sx={{ 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 3,
              borderRadius: 2,
              overflow: 'hidden'
            }}>
              <CardMedia
                component="img"
                height="300"
                image="/portfolio/images/profile.jpg"
                alt="Nicholas Steffen"
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Nicholas Steffen
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom sx={{ mb: 3 }} >
                  Software Engineer | AI & Web Development Enthusiast
                </Typography>
                
                <Divider sx={{ my: 2 }} />
                
                <Stack spacing={2} sx={{ mt: 3 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Work color="primary" />
                    <Typography>
                      <strong>Experience:</strong> 7+ years
                    </Typography>
                  </Stack>
                  
                  <Stack direction="row" spacing={1} alignItems="center">
                    <School color="primary" />
                    <Typography>
                      <strong>Education:</strong> B.A. Mathematics
                      <Typography variant="subtitle2"> Computer Science Minor </Typography>
                      <Typography variant="subtitle2"> Providence College '16</Typography>
                    </Typography>
                  </Stack>
                  
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Code color="primary" />
                    <Typography>
                      <strong>Specialties:</strong> Full-Stack, AI, Data
                    </Typography>
                  </Stack>
                </Stack>
                
                <Divider sx={{ my: 3 }} />
                
                <Stack direction="row" spacing={2} justifyContent="center">
                  <IconButton 
                    component={NextLink} 
                    href="mailto:your.email@example.com"
                    color="primary"
                  >
                    <Email fontSize="large" />
                  </IconButton>
                  <IconButton 
                    component={NextLink} 
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    color="primary"
                  >
                    <LinkedIn fontSize="large" />
                  </IconButton>
                  <IconButton 
                    component={NextLink} 
                    href="https://github.com/your-username"
                    target="_blank"
                    color="primary"
                  >
                    <GitHub fontSize="large" />
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
  
          {/* Bio Section */}
          <Grid sx={{ display: 'flex' }}  size={{xs: 12, md: 8}} >
          {/* <Grid sx={{ display: 'flex' }} > */}
            <Card sx={{ 
              height: '100%',
              boxShadow: 3,
              borderRadius: 2,
              p: { xs: 2, md: 4 }
            }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                  Professional Profile
                </Typography>
                
                <Typography variant="body1"  sx={{ mb: 3 }}>
                  I am a passionate software engineer with over 7 years of experience in backend and full-stack development. 
                  My expertise spans <strong>Python</strong>, <strong>Java</strong>, and modern web frameworks like 
                  <strong> Next.js</strong> and <strong>Vue.js</strong>. My career has been driven by a commitment to 
                  leveraging technology for meaningful impact, particularly in healthcare, non-profits, and social good initiatives.
                </Typography>
                
                <Box sx={{ 
                  backgroundColor:  theme.palette.action.hover,
                  p: 3,
                  borderRadius: 1,
                  mb: 4
                }}>
                  <Typography variant="h6" gutterBottom>
                    Recent Experience
                  </Typography>
                  <Typography variant="body1" paragraph>
                    At <strong>ClearlyRated</strong>, I built scalable web applications, optimized data-driven solutions, 
                    and enhanced user experiences. Prior to that, I contributed to mission-critical projects at 
                    <strong> Raytheon</strong>, honing my expertise in high-performance software systems.
                  </Typography>
                </Box>

               <Typography variant="h6" gutterBottom>
                    Why Work With Me?
                </Typography> 
                <Typography variant="body1">
                        I combine mathematical problem-solving skills with practical software engineering experience 
                        to build solutions that are both technically sound and business-appropriate. 
                        My ability to quickly master new technologies and my commitment to clean, maintainable code 
                        make me a valuable asset to any development team.
                        Let's connect to discuss how I can contribute to your next project!
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                  Currently, I am exploring opportunities that align with my technical skills and passion for impactful solutions. 
                  Whether it's <strong>AI-driven insights</strong>, <strong>web development</strong>, or 
                  <strong> data engineering</strong>, I thrive in dynamic environments that challenge me to grow and innovate.
                </Typography>
                
                <Divider sx={{ my: 3 }} />
                <Skills></Skills>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  }