import { Box, Typography, Paper } from "@mui/material";
import * as styles from "./ContactSection.styles";

const ContactSection = ({ id }: { id?: string }) => {
  return (
    <Box component="section" id={id} sx={styles.sectionWrapper}>
      <Typography variant="h4" sx={styles.sectionTitle}>
        Biz bilan bog‘laning
      </Typography>
      <Paper
        sx={{
          p: { xs: 3, md: 5 },
          maxWidth: 500,
          mx: "auto",
          textAlign: "center",
          borderRadius: 4,
          boxShadow: "0 4px 32px 0 rgba(25, 118, 210, 0.10)",
          background: "rgba(255,255,255,0.85)",
        }}
        elevation={0}
      >
        <Typography variant="h6" mb={3} color="#43a047" fontWeight={700} letterSpacing={0.5}>
          Biz bilan bog‘laning
        </Typography>
        <Typography variant="body1" mb={2} color="#333">
          <strong>Manzil:</strong> Toshkent shahri, Chilonzor tumani, 39-maktab
        </Typography>
        <Typography variant="body1" mb={2} color="#333">
          <strong>Telefon:</strong> <a href="tel:+998711234567" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500 }}>+998 71 123-45-67</a>
        </Typography>
        <Typography variant="body1" mb={2} color="#333">
          <strong>Email:</strong> <a href="mailto:info@39school.uz" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500 }}>info@39school.uz</a>
        </Typography>
        <Box sx={{ mt: 3, borderRadius: 3, overflow: "hidden", boxShadow: "0 2px 16px 0 rgba(25,118,210,0.08)" }}>
          <iframe
            src="https://yandex.com/map-widget/v1/?um=constructor%3Aexample&source=constructor"
            width="100%"
            height="250"
            frameBorder="0"
            title="Maktab manzili"
            style={{ border: 0 }}
            allowFullScreen
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactSection;
