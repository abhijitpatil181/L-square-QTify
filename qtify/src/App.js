import "./App.css";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import theme from "./themes";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
