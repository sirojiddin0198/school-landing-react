import { Box, Typography, Grid, Paper, Avatar, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";

const team = [
  {
    name: "Olimjon Qodirov",
    role: "Direktor",
    img: "/posts/sample1.jpg",
    instagram: "#",
    telegram: "#",
    facebook: "#",
  },
  {
    name: "Dilnoza Karimova",
    role: "O‘quv ishlari bo‘yicha mudira",
    img: "/posts/sample1.jpg",
    instagram: "#",
    telegram: "#",
    facebook: "#",
  },
  {
    name: "Javlonbek Tursunov",
    role: "Psixolog",
    img: "/posts/sample1.jpg",
    instagram: "#",
    telegram: "#",
    facebook: "#",
  },
  {
    name: "Gulbahor Ismoilova",
    role: "Ingliz tili o‘qituvchisi",
    img: "/posts/sample1.jpg",
    instagram: "#",
    telegram: "#",
    facebook: "#",
  },
];

const TeamSection = ({ id }: { id?: string }) => (
  <Box id={id} component="section" sx={{ py: 8, px: { xs: 2, md: 6 }, background: "linear-gradient(135deg, #fffde7 0%, #e3f2fd 100%)" }}>
    <Typography variant="h4" sx={{ textAlign: "center", mb: 2, fontWeight: 700, color: "#43a047" }}>
      Jamoamiz
    </Typography>
    <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 5, color: "#1976d2", fontWeight: 500, fontSize: "1.15rem" }}>
      Bizning mehnatsevar va fidokor jamoamiz!
    </Typography>
    <Grid container columns={12} sx={{ gap: 4, justifyContent: "center" }}>
      {team.map((member, idx) => (
        <Box key={idx} sx={{ flex: "1 1 0", minWidth: { xs: "100%", sm: "48%", md: "22%" }, maxWidth: { md: "22%" } }}>
          <Paper sx={{ p: 3, textAlign: "center", borderRadius: 3, boxShadow: "0 2px 16px 0 rgba(67,160,71,0.10)", background: "rgba(255,255,255,0.95)" }}>
            <Avatar src={member.img} alt={member.name} sx={{ width: 80, height: 80, mx: "auto", mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>{member.name}</Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>{member.role}</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
              <IconButton href={member.instagram} target="_blank" aria-label="Instagram" size="small" sx={{ color: "#E1306C" }}>
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton href={member.telegram} target="_blank" aria-label="Telegram" size="small" sx={{ color: "#229ED9" }}>
                <TelegramIcon fontSize="small" />
              </IconButton>
              <IconButton href={member.facebook} target="_blank" aria-label="Facebook" size="small" sx={{ color: "#1877F3" }}>
                <FacebookIcon fontSize="small" />
              </IconButton>
            </Box>
          </Paper>
        </Box>
      ))}
    </Grid>
  </Box>
);

export default TeamSection;
