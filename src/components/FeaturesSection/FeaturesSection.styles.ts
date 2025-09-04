import type { SxProps, Theme } from "@mui/material";

export const sectionWrapper: SxProps<Theme> = {
  py: 8,
  px: { xs: 2, md: 6 },
};

export const sectionTitle: SxProps<Theme> = {
  textAlign: "center",
  mb: 6,
  fontWeight: "bold",
};

export const featureItem: SxProps<Theme> = {
  textAlign: "center",
  p: 3,
};
