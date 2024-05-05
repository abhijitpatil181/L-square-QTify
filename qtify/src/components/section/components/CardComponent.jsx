import * as React from "react";
import {
  useTheme,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Chip,
} from "@mui/material";

const CardComponent = ({ title, img, followers }) => {
  const theme = useTheme();
  return (
    <>
    
      <Card sx={{ width: "159px", height: "205px", borderRadius: "10px" }}>
        <CardActionArea>
          <CardMedia component="img" height="170px" image={img} alt={title} />
          <CardContent
            sx={{
              height: "35px",
              backgroundColor: theme.palette.secondary.main,
              padding: "0px",
            }}
          >
            <Chip
              sx={{
                borderRadius: "10px",
                height: "23px",
                margin: "6px",
                padding: "4px 8px 4px 8px",
                fontSize: "10px",
                fontWeight: "400",
                backgroundColor: theme.palette.background.default,
                color: theme.palette.secondary.main,
              }}
              label={`${followers} Follows`}
            />
          </CardContent>
        </CardActionArea>
      </Card>
      <h5 style={{ color: theme.palette.secondary.main }}>{title}</h5>
    </>
  );
};

export default CardComponent;
