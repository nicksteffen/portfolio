import { Container, Box, Button, Typography } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";



export default function Contact() {

    // todo replace buttons with icons

    return (
        <>
            <Container maxWidth="md" sx={{ textAlign: 'center', mt: 5 }}>
                <Typography variant="h3" gutterBottom>Contact</Typography>
                <Typography variant="body1">Feel free to reach out to me via email at nicksteffen94@gmail.com or connect with me on my profiles below:</Typography>
                
                <Box mt={2}>
                    <Button variant="contained" color="primary" href="https://www.linkedin.com/in/nicholassteffen1/" target="_blank" sx={{ mr: 2 }} >
                        <LinkedIn/>
                    </Button>
                    <Button variant="contained" color="secondary" href="https://github.com/nicksteffen" target="_blank" >
                        <GitHub/>
                    </Button>
                </Box>
            </Container>

        </>

    )
}