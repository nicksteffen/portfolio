import { Work, School, Code, Email, LinkedIn, GitHub } from "@mui/icons-material";
import { Card, CardMedia, CardContent, Typography, Divider, Stack, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2"; // Add this line to import Grid
  import NextLink from 'next/link';
import ResumeDownloadButton from "../ResumeDownloadButton";
import SocialButtons from "../SocialButtons";

export default function Profile() {


    return (
        <>
          {/* Profile Section */}
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
                <SocialButtons/>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="center">
                    <ResumeDownloadButton/>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </>
    )

}