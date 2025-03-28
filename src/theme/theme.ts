import { createTheme } from "@mui/material/styles";
import { getMuiContainer } from "./mui-container";
import { Jost, Poppins } from "next/font/google";
import { getMuiButton } from "./mui-button";

export const fontPrimary = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const fontSecondary = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }
}

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
      xxl: 1440,
    },
  },
  palette: {
    primary: {
      main: "#CC9761",
    },
    secondary: {
      main: "#FF6A00",
      dark: "#D88D58"
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
  spacing: (factor: number) => `${factor / 16}rem`,
});

theme.components = {
  MuiContainer: getMuiContainer(theme),
  MuiButton: getMuiButton(theme),
};

export default theme;
