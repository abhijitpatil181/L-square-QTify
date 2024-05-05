import { HeroSection } from "../../components/index";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { Section } from "../../components/index";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material";

const HomePage = () => {
  const [filters, setFilters] = useState({ key: "all", lable: "All" });
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;
  const theme = useTheme();

  return (
    <Box
      sx={{ backgroundColor: theme.palette.background.default, width: "100vw" }}
    >
      <HeroSection />
      <Box
        sx={{
          margin: "0 32px",
        }}
      >
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
      </Box>
    </Box>
  );
};
export default HomePage;
