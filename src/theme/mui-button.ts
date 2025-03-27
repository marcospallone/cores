import { Components, Theme } from "@mui/material/styles";
import { fontPrimary, fontSecondary } from "./theme";

export const getMuiButton = (theme: Theme): Components["MuiButton"] => ({
  styleOverrides: {
    root: {
        display: 'flex',
        alignItems: 'center',
        padding: `${theme.spacing(16)} ${theme.spacing(32)}`,
        borderRadius: 0,
        textTransform: 'uppercase',
        textDecoration: 'none',
        fontWeight: 700,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.white[900],
        transition: 'background-color 0.5s ease',
        fontFamily: `${fontPrimary.style.fontFamily}, sans-serif`,

        '&:hover': {
            backgroundColor: theme.palette.success.main,
        },
    },
  },
});
