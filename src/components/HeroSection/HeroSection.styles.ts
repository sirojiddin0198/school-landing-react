import type { SxProps, Theme } from "@mui/material";

export const sectionWrapper: SxProps<Theme> = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: { xs: "80vh", md: "100vh" },
  color: "white",
  textAlign: "center",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  overflow: "hidden",
};

export const overlay: SxProps<Theme> = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(135deg, rgba(25,118,210,0.7) 0%, rgba(67,160,71,0.7) 100%)",
  opacity: 0.7,
  zIndex: 1,
};

export const title: SxProps<Theme> = {
  fontWeight: "bold",
  fontSize: { xs: "2.2rem", md: "4rem" },
  mb: 3,
  textShadow: "0 4px 24px rgba(0,0,0,0.5)",
  letterSpacing: "0.03em",
};

export const subtitle: SxProps<Theme> = {
  maxWidth: "700px",
  mx: "auto",
  mb: 4,
  fontSize: { xs: "1.15rem", md: "1.5rem" },
  color: "#fffde7",
  textShadow: "0 2px 12px rgba(25,118,210,0.3)",
};
