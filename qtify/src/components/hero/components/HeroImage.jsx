import { Box } from "@mui/material";
import heroImage from "../../../assets/hero_headphones.png";

const HeroImage = () => {
  return (
    <>
      <Box>
        <img
          src={heroImage}
          alt="hero-img"
          style={{ height: "212px", width: "212px" }}
        />
      </Box>
    </>
  );
};

export default HeroImage;
