import { LinkedIn, GitHub, Email } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import NextLink from "next/link";
import { siteConfig } from "@/lib/site";

export default function SocialButtons() {
  return (
    <>
      <IconButton
        component={NextLink}
        href={siteConfig.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        size="large"
        aria-label="LinkedIn profile"
      >
        <LinkedIn fontSize="large" />
      </IconButton>
      <IconButton
        component={NextLink}
        href={siteConfig.github}
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        size="large"
        aria-label="GitHub profile"
      >
        <GitHub fontSize="large" />
      </IconButton>
      <IconButton
        component={NextLink}
        href={`mailto:${siteConfig.email}`}
        color="primary"
        size="large"
        aria-label={`Email ${siteConfig.email}`}
      >
        <Email fontSize="large" />
      </IconButton>
    </>
  );
}
