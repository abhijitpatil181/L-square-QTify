import { styled } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

export const HeroContainer = styled(Box)(({ theme }) => ({
  width: "556px",
  height: "100px",
}));

export const HeroCotentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const HeroContent = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: 600,
  lineHeight: "48px",
  color: theme.palette.secondary.main,
}));
