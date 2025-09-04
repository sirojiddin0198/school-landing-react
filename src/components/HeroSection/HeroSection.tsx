
import { Box, Button, Container, Typography } from "@mui/material";
import * as styles from "./HeroSection.styles";

export default function HeroSection({ id }: { id?: string }) {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      id={id}
      sx={{
        ...styles.sectionWrapper,
        backgroundImage: `url('/hero-school-bg.jpg')`,
      }}
    >
      <Box sx={styles.overlay} />
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Typography variant="h2" component="h1" sx={styles.title}>
          39-maktab: Ilm, orzu va muvaffaqiyat sari birga!
        </Typography>
        <Typography variant="h6" sx={styles.subtitle}>
          Zamonaviy taʼlim, xavfsiz muhit va har bir o‘quvchi uchun keng imkoniyatlar.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ borderRadius: "30px", px: 4, py: 1.5, fontSize: "1rem", textTransform: "none", fontWeight: "bold" }}
          onClick={handleScrollToContact}
        >
          Bog‘lanish
        </Button>
      </Container>
    </Box>
  );
}
