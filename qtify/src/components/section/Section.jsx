import { Box, Typography, Button, Grid } from "@mui/material";
import CardComponent from "./components/CardComponent";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import Carousel from "../carousel/Carousel";
import { Tooltip } from "@mui/material";

const Section = ({ title, data, type }) => {
  const [carousel, setCarousel] = useState(true);
  const theme = useTheme();

  const carouselHandler = () => {
    setCarousel((prevState) => !prevState);
  };
  console.log("data", data);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <Typography variant="h5" sx={{ color: theme.palette.secondary.main }}>
          {title}
        </Typography>
        <Button variant="text" onClick={carouselHandler}>
          {carousel ? "Show all" : "Collapse"}{" "}
        </Button>
      </Box>
      <Box sx={{ margin: "0 12px" }}>
        {carousel ? (
          <Carousel data={data} />
        ) : (
          <Grid container columnSpacing={2}>
            {data.map((ele) => (
              <Grid item xs={12} sm={6} md={4} lg={1.7} key={ele.id}>
                <Tooltip
                  title={`${ele.songs.length} songs`}
                  placement="top-start"
                  arrow
                >
                  <Box>
                    <CardComponent
                      title={ele.title}
                      img={ele.image}
                      followers={ele.follows}
                    />
                  </Box>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default Section;
