import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#34C94B", light: "#fff" },
    secondary: { main: "#FFFFFF", light: "#e8f1f9" },
    background: { default: "#121212 " },
    text: { primary: "#121212", secondary: "#212121", disabled: "#3c3c3c" },
  },
  typography: {
    fontFamily: "Poppins",
    body1: {
      fontFamily: "Poppins",
    },
    button: {
      fontFamily: "Poppins",
    },
  },
});

export default theme;
