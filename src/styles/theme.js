import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    danger: {
      main: "#d32f2f",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          fontSize: "1rem",
        },
      },
    },
  },
});
