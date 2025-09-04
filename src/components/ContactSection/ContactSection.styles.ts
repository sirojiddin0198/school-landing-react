import type { SxProps, Theme } from "@mui/material";

export const sectionWrapper: SxProps<Theme> = {
  py: 8,
  px: { xs: 2, md: 6 },
  background: "linear-gradient(135deg, #e0f7fa 0%, #fffde7 100%)",
};

export const sectionTitle: SxProps<Theme> = {
  textAlign: "center",
  mb: 4,
  fontWeight: "bold",
  color: "#1976d2",
  letterSpacing: "0.03em",
};
