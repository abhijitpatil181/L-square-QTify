import { InputField } from "./SearchBar.styled";
import { SearchIconButton } from "./SearchBar.styled";
import { Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <InputField placeholder="Search a song of your choice" />

        <SearchIconButton>
          <SearchIcon />
        </SearchIconButton>
      </Box>
    </>
  );
};

export default SearchBar;
