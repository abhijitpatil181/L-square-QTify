import { styled } from "@mui/system";

import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";

export const InputField = styled(TextField)(({ theme }) => ({
  width: "508px",
  height: "48px",

  background: theme.palette.secondary.main,
  borderRadius: "8px 0 0 8px",
  border: `1px solid ${theme.palette.background.default} `,

  "& .MuiInputBase-input": {
    padding: "12px",
  },
  "& .MuiInputBase-root": {
    height: "100%",
    width: "100%",
  },
}));

export const SearchIconButton = styled(IconButton)(({ theme }) => ({
  width: "60px",
  height: "48px",
  background: theme.palette.secondary.main,
  border: `1px solid ${theme.palette.background.default} `,
  borderRadius: "0 8px 8px 0",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));
