import { Box, Button } from "@mui/material";
import { siteConfig } from "@/lib/site";

export default function ResumeDownloadButton() {
  return (
    <Box mt={3}>
      <Button
        variant="contained"
        color="primary"
        href={siteConfig.resumePath}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Download Resume
      </Button>
    </Box>
  );
}
