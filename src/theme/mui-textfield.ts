import { Components, Theme } from "@mui/material/styles";
import { color } from "motion/react";

export const getMuiTextField = (theme: Theme): Components["MuiTextField"] => ({
  styleOverrides: {
    root: {
      position: "relative",

      "& .MuiOutlinedInput-root": {
        position: "relative",
        zIndex: 1,
        border: `2px solid ${theme.palette.grey[600]}`,
        borderRadius: 0,
        transition: "background-color 0.3s ease",
        color : theme.palette.white[900],

        "&::before, &::after": {
          content: '""',
          position: "absolute",
          backgroundColor: theme.palette.primary.main,
          zIndex: 2,
          transitionTimingFunction: "ease",
          pointerEvents: 'none'
        },

        "&::before": {
          top: -2,
          left: 0,
          height: "3px",
          width: 0,
          transition: "width 500ms ease 0ms",
        },

        "&::after": {
          top: -2,
          right: -2,
          width: "3px",
          height: 0,
          transition: "height 500ms ease 100ms",
        },

        "& .MuiInputBase-input": {
          position: "relative",
          zIndex: 3,
        },

        "&:hover": {
          "&::before": {
            width: "100%",
          },
          "&::after": {
            height: "calc(100% + 2px)",
          },
        },

        "&.Mui-focused": {
          borderColor: theme.palette.primary.main,
        }
      },

      "& ~ .custom-bottom-border": {
        content: '""',
        position: "absolute",
        bottom: 0,
        right: 0,
        height: "3px",
        width: 0,
        backgroundColor: theme.palette.primary.main,
        zIndex: 2,
        transition: "width 500ms ease 200ms",
        pointerEvents: 'none',
      },

      "& ~ .custom-left-border": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "3px",
        height: 0,
        backgroundColor: theme.palette.primary.main,
        zIndex: 2,
        transition: "height 500ms ease 300ms",
        pointerEvents: 'none',
      },

      "&:hover ~ .custom-left-border": {
        height: "100%",
      },
      "&:hover ~ .custom-bottom-border": {
        width: "100%",
      },
    },
  },
});
