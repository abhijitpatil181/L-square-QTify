import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

const FeedbackButton = () => {
  const theme = useTheme();

  return (
    <>
      <Button
        variant="contained"
        sx={{
          height: "47px",
          width: "170px",
          background: theme.palette.background.default,
          color: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.background.default,
          },
        }}
      >
        Give Feedback
      </Button>
    </>
  );
};

export default FeedbackButton;
