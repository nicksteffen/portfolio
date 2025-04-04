import { Box, Typography } from "@mui/material";
import theme from "../src/theme";

import { FaJava, FaNodeJs, FaVuejs, } from "react-icons/fa";

import { 
    SiNextdotjs,
    SiTypescript,
    SiPython, 
    SiFastapi,
    SiReact,
    SiDocker,
    SiPostgresql,
    SiMongodb,
    SiAnsible
  } from 'react-icons/si';


export default function TexhStackViz() {
    const techStack = [
        { 
          name: 'Python', 
          category: 'backend',
          icon: <SiPython /> // From react-icons
        },
        { 
          name: 'Java', 
          category: 'backend',
          icon: <FaJava /> // From react-icons
        },
        { 
          name: 'Node.js', 
          category: 'backend',
          icon: <FaNodeJs /> // From react-icons
        },
        { 
          name: 'FastAPI', 
          category: 'backend',
          icon: <SiFastapi /> // MUI icon (generic API symbol)
        },
        { 
          name: 'TypeScript', 
          category: 'frontend',
          icon: <SiTypescript/> // MUI icon (closest match)
        },
        { 
          name: 'React', 
          category: 'frontend',
          icon: <SiReact /> // From react-icons
        },
        { 
          name: 'Vue.js', 
          category: 'frontend',
          icon: <FaVuejs /> // From react-icons
        },
        { 
          name: 'Next.js', 
          category: 'frontend',
          icon: <SiNextdotjs /> // No direct icon - using generic code icon
        },
        { 
          name: 'Docker', 
          category: 'devops',
          icon: <SiDocker /> // From react-icons
        },
        { 
          name: 'Ansible', 
          category: 'devops',
          icon: <SiAnsible /> // No direct icon
        },
        { 
          name: 'PostgreSQL', 
          category: 'database',
          icon: <SiPostgresql /> // From react-icons
        },
        { 
          name: "MongoDB", 
          category: 'database',
          icon: <SiMongodb /> // From react-icons
        },
      ];
    
    return (
        <Box sx={{ position: 'relative', height: { xs: '300px', md: '400px' },
            display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
            <Box sx={{ width: '100%', height: '100%',
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 2, perspective: '1000px'
            }}>
            {/* Tech Stack Items */}
            {techStack.map((tech, index) => {
                const rotation = (index % 3) * 10 - 10; // -10, 0, 10 degrees
                const color = 
                tech.category === 'frontend' ? theme.palette.primary.main :
                tech.category === 'backend' ? theme.palette.secondary.main :
                theme.palette.info.main;
                
                return (
                    <Box key={tech.name}
                    sx={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      justifyContent: 'center', width: 100, height: 100,
                      borderRadius: '50%',
                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                      border: `1px solid ${theme.palette.divider}`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)', boxShadow: 3, bgcolor: color,
                        color: theme.palette.getContrastText(color), borderColor: color
                      }
                    }}
                  >
                    <Box sx={{ 
                        fontSize: '2.5rem', mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {tech.icon }
                    </Box>
                    <Typography variant="subtitle2" fontWeight="medium" sx={{ textAlign: 'center', p: 2 }} >
                        {tech.name}
                    </Typography>
                </Box>
                );
            })}
            </Box>
        </Box>

    )
}