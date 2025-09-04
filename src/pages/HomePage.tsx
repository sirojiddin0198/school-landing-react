import { Box } from "@mui/material";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import TeamSection from "../components/TeamSection/TeamSection";
import PostsSection from "../components/PostsSection/PostsSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import ContactSection from "../components/ContactSection/ContactSection";

const HomePage = () => {
  return (
    <Box component="main">
  <HeroSection id="hero" />
  <AboutSection id="about" />
  <PostsSection id="posts" />
  <FeaturesSection id="features" />
  <TeamSection id="team" />
  <ContactSection id="contact" />
    </Box>
  );
};

export default HomePage;
