import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import HeroSectionContent from "./components/HeroContent";
import HeroImage from "./components/HeroImage";

const HeroSection = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          width: "100vw",
          height: "270px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeroSectionContent />
        <HeroImage />
      </Box>
    </>
  );
};

export default HeroSection;
