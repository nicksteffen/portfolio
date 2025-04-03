// components/ProjectCard.tsx
import { Card, CardContent, CardMedia, Typography, Button, Chip,
    Stack, Box, Divider, Link } from '@mui/material';
  import NextLink from 'next/link';
  import { Project } from '@/types/project'; // Define your project type (see below)
//   import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import { GitHub } from '@mui/icons-material';
  
  type ProjectCardProps = {
    project: Project;
  };
  
  export default function ProjectCard({ project }: ProjectCardProps) {
    return (
      <Card
        sx={{
          maxWidth: 345,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 6
          }
        }}
        variant="outlined"
      >
        {/* Project Thumbnail */}
        {project.image && (
          <CardMedia
            component="img"
            height="140"
            image={`/portfolio/${project.image}`}

            alt={project.title}
            sx={{ objectFit: 'cover' }}
          />
        )}
  
        <CardContent sx={{ flexGrow: 1 }}>
          {/* Project Title */}
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
  
          {/* Project Description */}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {project.description}
          </Typography>
  
          {/* Tech Stack Chips */}
          {project.technologies && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" color="text.secondary">
                Technologies:
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
                {project.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    variant="outlined"
                    sx={{ mb: 1 }}
                  />
                ))}
              </Stack>
            </Box>
          )}
        </CardContent>
  
        <Divider />
  
        {/* Action Buttons */}
        <Box sx={{ p: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {project.demoUrl && (
            <Button
              component={NextLink}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="small"
            >
              Live Demo
            </Button>
          )}
  
          {project.githubUrls?.map((url, index) => (
            <Button
              key={index}
              component={NextLink}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              size="small"
              startIcon={
                <GitHub 
                fontSize="small" 
                sx={{ color: 'text.primary' }} 
              />



                // <Box
                //   component="img"
                //   src="/portfolio/github-mark.svg" // Place GitHub logo in public folder
                //   alt="GitHub"
                //   sx={{ width: 16, height: 16 }}
                // />
              }
            >
              {project.githubUrls.length > 1 ? `Repo ${index + 1}` : 'GitHub'}
            </Button>
          ))}
        </Box>
      </Card>
    );
  }