import { Work, School, Code } from "@mui/icons-material";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ResumeDownloadButton from "../ResumeDownloadButton";
import SocialButtons from "../SocialButtons";
import ToptalBadge from "../ToptalBadge";
import { siteConfig } from "@/lib/site";

export default function Profile() {
  return (
    <Grid sx={{ display: "flex" }} size={{ xs: 12, md: 4 }}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: 3,
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={siteConfig.profileImage}
          alt={siteConfig.name}
          sx={{ objectFit: "cover", aspectRatio: "1/1" }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            {siteConfig.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            gutterBottom
            sx={{ mb: 3 }}
          >
            {siteConfig.title}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Stack spacing={2} sx={{ mt: 3 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Work color="primary" />
              <Typography>
                <strong>Experience:</strong> 10+ years
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <School color="primary" />
              <Typography>
                <strong>Education:</strong> B.A. Mathematics
                <Typography variant="subtitle2">
                  {" "}
                  Computer Science Minor{" "}
                </Typography>
                <Typography variant="subtitle2">
                  {" "}
                  Providence College &apos;16
                </Typography>
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <Code color="primary" />
              <Typography>
                <strong>Specialties:</strong> Full-Stack, Integrations, AI Tooling
              </Typography>
            </Stack>
          </Stack>

          <Divider sx={{ my: 3 }} />
          <Stack direction="row" spacing={2} justifyContent="center">
            <SocialButtons />
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="center">
            <ResumeDownloadButton />
          </Stack>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 3 }}>
            <ToptalBadge />
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}
