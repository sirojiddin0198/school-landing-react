import { Box, Typography, Paper } from "@mui/material";

const AboutSection = ({ id }: { id?: string }) => (
  <Box id={id} component="section" sx={{ py: 8, px: { xs: 2, md: 0 }, background: "linear-gradient(135deg, #e3f2fd 0%, #fffde7 100%)" }}>
    <Paper sx={{ maxWidth: 1200, mx: "auto", p: { xs: 3, md: 8 }, borderRadius: 6, boxShadow: "0 12px 64px 0 rgba(25, 118, 210, 0.15)", background: "rgba(255,255,255,0.98)", position: "relative", overflow: "hidden" }}>
      <Box sx={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, background: "linear-gradient(135deg, #1976d2 60%, #43a047 100%)", opacity: 0.15, borderRadius: "50%", zIndex: 0 }} />
      <Box sx={{ position: "absolute", bottom: -30, left: -30, width: 120, height: 120, background: "linear-gradient(135deg, #43a047 60%, #1976d2 100%)", opacity: 0.10, borderRadius: "50%", zIndex: 0 }} />
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: { xs: 4, md: 8 }, position: "relative", zIndex: 1 }}>
        <Box sx={{ flex: 1, minWidth: 280 }}>
          <Typography variant="h4" sx={{ textAlign: "left", mb: 2, fontWeight: 700, color: "#1976d2", letterSpacing: 1 }}>
            Tanishuv
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 4, color: "#43a047", fontWeight: 500, fontSize: "1.25rem" }}>
            Biz haqimizda ko‘proq biling!
          </Typography>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: "#43a047" }}>
            39-maktab – Ilm, orzu va kelajak sari birga!
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.18rem", color: "#333", mb: 2 }}>
            <span style={{ fontWeight: 500, color: "#1976d2" }}>Biz haqimizda:</span> Maktabimiz Toshkent shahridagi eng zamonaviy taʼlim muassasalaridan biri bo‘lib, o‘quvchilarga innovatsion metodikalar, ilg‘or texnologiyalar va individual rivojlanish imkoniyatlarini taqdim etadi.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.15rem", color: "#333", mb: 2 }}>
            <span style={{ fontWeight: 500, color: "#43a047" }}>Bizning qadriyatlarimiz:</span> Ilm-fan, jamoaviylik, liderlik va hayotga tayyorlik. Har bir o‘quvchi uchun qulay, xavfsiz va do‘stona muhit yaratilgan.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.15rem", color: "#333" }}>
            <span style={{ fontWeight: 500, color: "#ffa000" }}>Hamkorlik:</span> Ota-onalar va jamiyat bilan birga kelajak avlodni tarbiyalashga xizmat qilamiz. Maktabimizda har bir o‘quvchi o‘z orzulari sari dadil qadam tashlaydi!
          </Typography>
        </Box>
        <Box sx={{ flex: 1, minWidth: 280, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src="/hero-school-bg.jpg" alt="Maktab" style={{ width: "100%", maxWidth: 400, borderRadius: 24, boxShadow: "0 4px 32px 0 rgba(25,118,210,0.10)" }} />
        </Box>
      </Box>
    </Paper>
  </Box>
);

export default AboutSection;
