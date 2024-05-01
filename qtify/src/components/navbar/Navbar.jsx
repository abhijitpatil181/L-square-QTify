import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../logo/Logo";
import SearchBar from "../search/SearchBar";
import FeedbackButton from "../feedback/FeedbackButton";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, height: "74px", width: "100vw" }}>
        <AppBar sx={{ color: "" }}>
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Logo />
              <SearchBar />
              <FeedbackButton />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
