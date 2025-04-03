// import { AppBar, Button, Toolbar } from "@mui/material";



// export default function TopNavBar() {
//     return(
//         <>
//             <AppBar position="static">
//                 <Toolbar>
//                     <Button href="/" variant="contained" color="primary" size="large"> Home </Button>
//                     <Button href="/about" variant="contained" color="primary" size="large"> About</Button>
//                     <Button href="/projects" variant="contained" color="primary" size="large"> Projects</Button>
//                     <Button href="/contact" variant="contained" color="primary" size="large"> Contact</Button>
//                 </Toolbar>
//             </AppBar>
//         </>
//     )




// }



'use client'
import { AppBar, Button, Toolbar } from "@mui/material";
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
          justifyContent: 'center', // centers the buttons
        }}
      >
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
      </Toolbar>
    </AppBar>
  );
}