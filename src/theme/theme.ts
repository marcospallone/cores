import { Components, createTheme } from "@mui/material/styles";
import { getMuiContainer } from "./mui-container";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    white: { 900: string };
  }

  interface PaletteOptions {
    white?: { 900: string };
  }
}

const theme = createTheme({
  cssVariables: true,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      main: "#FF6A00",
    },
    secondary: {
      main: "#FF4C29",
    },
    success: {
      main: "#385539",
    },
    grey: {
      "900": "#121212",
      "800": "#1E1E1E",
      "700": "#2C2C2C",
      "600": "#B0B0B0",
    },
    white: {
      "900": "#F5F5F5",
    },
  },
  spacing: (factor: number) => `${factor / 20}rem`,
});

theme.components = {
  MuiContainer: getMuiContainer(theme),
};

export default theme;
