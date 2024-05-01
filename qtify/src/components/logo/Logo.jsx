import { Box } from "@mui/material";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <>
      <Box>
        <img src={logo} alt="logo" style={{ height: "34px", width: "67px" }} />
      </Box>
    </>
  );
};

export default Logo;
