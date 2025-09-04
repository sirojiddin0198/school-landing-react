function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

import { CssBaseline, AppBar, Toolbar, IconButton, Tooltip, Box } from "@mui/material";
import HomePage from "./pages/HomePage";
import ArticleIcon from "@mui/icons-material/Article";
import StarIcon from "@mui/icons-material/Star";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import InfoIcon from "@mui/icons-material/Info";



function App() {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="sticky"
        sx={{
          mb: 2,
          background: "linear-gradient(90deg, #1976d2 0%, #43a047 100%)",
          boxShadow: "0 4px 24px 0 rgba(25, 118, 210, 0.15)",
        }}
      >
        <Toolbar sx={{ maxWidth: 'lg', mx: 'auto', width: '100%' }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, width: "100%" }}>
            <Tooltip title="Bosh sahifa">
              <IconButton
                color="inherit"
                onClick={() => scrollToSection("hero")}
                sx={{
                  transition: "transform 0.2s, box-shadow 0.2s",
                  '&:hover': {
                    transform: "scale(1.25)",
                    boxShadow: "0 0 12px 2px #1976d2, 0 0 24px 4px #43a047",
                    background: "rgba(25,118,210,0.08)",
                  },
                }}
              >
                <HomeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Tanishuv">
              <IconButton
                color="inherit"
                onClick={() => scrollToSection("about")}
                sx={{
                  transition: "transform 0.2s, box-shadow 0.2s",
                  '&:hover': {
                    transform: "scale(1.25)",
                    boxShadow: "0 0 12px 2px #1976d2, 0 0 24px 4px #ffa000",
                    background: "rgba(25,118,210,0.08)",
                  },
                }}
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Jamoa">
              <IconButton
                color="inherit"
                onClick={() => scrollToSection("team")}
                sx={{
                  transition: "transform 0.2s, box-shadow 0.2s",
                  '&:hover': {
                    transform: "scale(1.25)",
                    boxShadow: "0 0 12px 2px #43a047, 0 0 24px 4px #1976d2",
                    background: "rgba(67,160,71,0.08)",
                  },
                }}
              >
                <GroupIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Yangiliklar">
              <IconButton
                color="inherit"
                onClick={() => scrollToSection("posts")}
                sx={{
                  transition: "transform 0.2s, box-shadow 0.2s",
                  '&:hover': {
                    transform: "scale(1.25)",
                    boxShadow: "0 0 12px 2px #ffa000, 0 0 24px 4px #1976d2",
                    background: "rgba(255,160,0,0.08)",
                  },
                }}
              >
                <ArticleIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Xizmatlar">
              <IconButton
                color="inherit"
                onClick={() => scrollToSection("features")}
                sx={{
                  transition: "transform 0.2s, box-shadow 0.2s",
                  '&:hover': {
                    transform: "scale(1.25)",
                    boxShadow: "0 0 12px 2px #43a047, 0 0 24px 4px #ffa000",
                    background: "rgba(67,160,71,0.08)",
                  },
                }}
              >
                <StarIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Kontakt">
              <IconButton
                color="inherit"
                onClick={() => scrollToSection("contact")}
                sx={{
                  transition: "transform 0.2s, box-shadow 0.2s",
                  '&:hover': {
                    transform: "scale(1.25)",
                    boxShadow: "0 0 12px 2px #1976d2, 0 0 24px 4px #43a047",
                    background: "rgba(25,118,210,0.08)",
                  },
                }}
              >
                <ContactMailIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #e3f2fd 0%, #fffde7 100%)",
        }}
      >
        <HomePage />
      </Box>
    </>
  );
}

export default App;
