import { Box, Typography, Button, Grid } from "@mui/material";
import CardComponent from "./components/CardComponent";
import { useTheme } from "@emotion/react";

const Section = ({ title, data, type }) => {
  const theme = useTheme();
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
        <Button variant="text">Show all</Button>
      </Box>
      <Box sx={{ margin: "0 12px" }}>
        <Grid container spacing={1}>
          {data.map((ele) => (
            <Grid item xs={12} sm={6} md={4} lg={1.7}>
              <CardComponent
                key={ele.id}
                title={ele.title}
                img={ele.image}
                followers={ele.follows}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Section;
