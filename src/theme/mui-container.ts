import { Components, Theme } from '@mui/material/styles';

export const getMuiContainer = (theme: Theme): Components['MuiContainer'] => ({
  styleOverrides: {
    root: {
      paddingLeft: `${theme.spacing(80)} !important`,
      paddingRight: `${theme.spacing(80)} !important`,
      paddingTop: theme.spacing(40),
      paddingBottom: theme.spacing(40),
      maxWidth: '100% !important',

      [theme.breakpoints.down('xl')]: {
        paddingLeft: `${theme.spacing(48)} !important`,
        paddingRight: `${theme.spacing(48)} !important`
      },


      [theme.breakpoints.down('lg')]: {
        paddingLeft: `${theme.spacing(40)} !important`,
        paddingRight: `${theme.spacing(40)} !important`,
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(20),
      },

      [theme.breakpoints.down('md')]: {
        paddingLeft: `${theme.spacing(20)} !important`,
        paddingRight: `${theme.spacing(20)} !important`,
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(20),
      },
    },
  },
});
