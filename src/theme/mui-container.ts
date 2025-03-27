import { Components, Theme } from '@mui/material/styles';

export const getMuiContainer = (theme: Theme): Components['MuiContainer'] => ({
  styleOverrides: {
    root: {
      paddingLeft: `${theme.spacing(80)} !important`,
      paddingRight: `${theme.spacing(80)} !important`,
      marginTop: theme.spacing(40),
      marginBottom: theme.spacing(40),
      maxWidth: '100% !important',

      [theme.breakpoints.down('xl')]: {
        paddingLeft: `${theme.spacing(60)} !important`,
        paddingRight: `${theme.spacing(60)} !important`
      },


      [theme.breakpoints.down('lg')]: {
        paddingLeft: `${theme.spacing(40)} !important`,
        paddingRight: `${theme.spacing(40)} !important`,
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(20),
      },

      [theme.breakpoints.down('md')]: {
        paddingLeft: `${theme.spacing(20)} !important`,
        paddingRight: `${theme.spacing(20)} !important`,
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(20),
      },
    },
  },
});
