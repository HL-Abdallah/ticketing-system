import { createTheme } from "@mui/material";
import "@fontsource/inter";

const light = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "Inter , serif , sans-serif",
  },
  zIndex: {
    appBar: 1201,
  },
});

const dark = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Inter , serif , sans-serif",
  },
  zIndex: {
    appBar: 1201,
  },
});

export { light, dark };
