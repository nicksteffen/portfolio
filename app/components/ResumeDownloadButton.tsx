import { Box, Button } from "@mui/material";



export default function ResumeDownloadButton() {

    return (
        <>
        <Box mt={3}>
          <Button variant="contained" color="primary" href="NicholasSteffenResume.pdf" target="_blank" >
            Download Resume
          </Button>
        </Box>
        </>
    )
}
