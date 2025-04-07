'use client'
import { AccountCircle } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function TopNavBar() {
    
    const router = useRouter();
    const pages = ['About', 'Projects', 'Contact'];
    return (
        <AppBar position="static"
        sx={{
            backgroundColor: 'background.paper',
            // boxShadow: 3, // MUI shadow number (0-24)
            color: 'text.primary',
            boxShadow: 'none',
            borderBottom: '1px solid',
            borderColor: 'divider',
        }}
        >
        <Toolbar
            sx={{
            px: 3, // theme.spacing(3)
            minHeight: 64,
            justifyContent: 'space-between', // separate left and right sides
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }} >
            {/* Replace with your actual icon component */}
            <IconButton 
                onClick={() => router.push('/')}
                sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)', }, }}
            >
            {/* Example using AccountCircle icon - replace with your logo */}
            <AccountCircle fontSize="large" sx={{ color: 'text.primary' }} />
            </IconButton>
      
            {/* Optional text/name beside icon */}
            <Typography variant="h6" component="div" 
                sx={{ fontWeight: 'bold', cursor: 'pointer', }}
                onClick={() => router.push('/')}
            >
                My Portfolio
            </Typography>
            </Box>


            {/* nav buttons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, }} >

            {/* always have home page */}
            <Button
                key={"Home"}
                onClick={() => router.push('/')}
                variant="contained"
                size="large"
                sx={{
                mx: 1, // theme.spacing(1)
                fontWeight: 'medium',
                letterSpacing: '0.02857em',
                textTransform: 'uppercase',
                color: 'white',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                },
                }}
            >
                Home
            </Button>


            {pages.map((page) => (
            <Button
                key={page}
                // href={`/${page.toLowerCase()}`}
                onClick={() => router.push(`/${page.toLowerCase()}`)}
                variant="contained"
                size="large"
                sx={{
                mx: 1, // theme.spacing(1)
                fontWeight: 'medium',
                letterSpacing: '0.02857em',
                textTransform: 'uppercase',
                color: 'white',
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                },
                }}
            >
                {page}
            </Button>
            ))}

            </Box>
        </Toolbar>
        </AppBar>
    );
    }