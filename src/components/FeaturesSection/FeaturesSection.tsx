import { Typography, Box, Paper, Modal, IconButton } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ScienceIcon from "@mui/icons-material/Science";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SecurityIcon from "@mui/icons-material/Security";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import * as styles from "./FeaturesSection.styles";

import { useState } from "react";
const features = [
  {
    icon: <SchoolIcon fontSize="large" />, 
    title: "Zamonaviy taʼlim dasturlari",
    details: "Maktabimizda zamonaviy taʼlim dasturlari, ilg‘or metodikalar va innovatsion yondashuvlar joriy etilgan. Har bir o‘quvchi uchun individual rivojlanish imkoniyati yaratiladi."
  },
  {
    icon: <ScienceIcon fontSize="large" />, 
    title: "Fan va texnologiya darslari",
    details: "STEM yo‘nalishidagi fan va texnologiya darslari, zamonaviy laboratoriyalar va tajriba mashg‘ulotlari orqali o‘quvchilar bilimini chuqurlashtiramiz."
  },
  {
    icon: <SportsSoccerIcon fontSize="large" />, 
    title: "Futbol maydoni va sport to‘garaklari",
    details: "Yangi futbol maydoni, sport to‘garaklari va jismoniy tarbiya uchun keng imkoniyatlar mavjud."
  },
  {
    icon: <FitnessCenterIcon fontSize="large" />, 
    title: "Yangi sport zali",
    details: "Maktabimizda zamonaviy sport zali, fitnes jihozlari va sog‘lom turmush tarzini targ‘ib qiluvchi muhit yaratilgan."
  },
  {
    icon: <SecurityIcon fontSize="large" />, 
    title: "Xavfsiz hudud va nazorat",
    details: "Maktab hududi to‘liq nazorat ostida, xavfsizlik tizimi va video kuzatuv mavjud. O‘quvchilar uchun xavfsiz muhit kafolatlanadi."
  },
  {
    icon: <LocalLibraryIcon fontSize="large" />, 
    title: "Qo‘shimcha darslar va to‘garaklar",
    details: "O‘quvchilar uchun turli to‘garaklar, qo‘shimcha darslar va ijodiy mashg‘ulotlar tashkil etilgan."
  },
  {
    icon: <EmojiEventsIcon fontSize="large" />, 
    title: "Olimpiada va tanlov g‘oliblari",
    details: "Maktabimiz o‘quvchilari fan olimpiadalari va turli tanlovlarda yuqori natijalarga erishib kelmoqda."
  },
];

const FeaturesSection = ({ id }: { id?: string }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setSelected(index);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <Box component="section" id={id} sx={styles.sectionWrapper}>
      <Typography variant="h4" sx={styles.sectionTitle}>
        Maktabimiz afzalliklari
      </Typography>
      <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 4, color: "#1976d2", fontWeight: 500, fontSize: "1.15rem" }}>
        O‘quvchilar vaqtini samarali o‘tkazishi uchun turli to‘garaklar va ijodiy mashg‘ulotlar mavjud!
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '1fr 1fr 1fr'
          },
          gap: 4,
          justifyItems: 'center',
        }}
      >
        {features.map((feature, index) => (
          <Paper
            sx={{
              ...styles.featureItem,
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              '&:hover': {
                transform: "scale(1.08)",
                boxShadow: "0 0 24px 4px #43a047, 0 0 48px 8px #ffa000",
              },
            }}
            elevation={3}
            key={index}
            onClick={() => handleOpen(index)}
          >
            {feature.icon}
            <Typography variant="h6" mt={2}>
              {feature.title}
            </Typography>
          </Paper>
        ))}
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ maxWidth: 400, bgcolor: "background.paper", p: 4, mx: "auto", my: 8, borderRadius: 2, boxShadow: 24, position: "relative" }}>
          <IconButton onClick={handleClose} sx={{ position: "absolute", top: 8, right: 8 }}>
            <span aria-label="Yopish">✕</span>
          </IconButton>
          {selected !== null && (
            <>
              <Typography variant="h5" mb={2}>{features[selected].title}</Typography>
              <Typography variant="body1">{features[selected].details}</Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default FeaturesSection;
