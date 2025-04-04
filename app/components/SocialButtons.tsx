import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import NextLink from 'next/link';

export default function SocialButtons() {

    return (
        <>
        <IconButton 
          component={NextLink} 
          href="https://linkedin.com/in/nicholassteffen1"
          target="_blank"
          color="primary"
          size="large"
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton 
          component={NextLink} 
          href="https://github.com/nicksteffen"
          target="_blank"
          color="primary"
          size="large"
        >
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton 
          component={NextLink} 
          href="mailto:nicksteffen94@gmail.com"
          color="primary"
          size="large"
        >
          <Email fontSize="large" />
        </IconButton>
        </>

    )
}