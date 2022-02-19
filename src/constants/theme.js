import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3A80BA',
      mainBg: '#FFFFFF',
    },
    secondary: {
      main: '#1C3B55',
    },
    text: {
      mainTextColor: '#1A1A1A',
      black: '#000000',
      grey: '#F1F1F1',
      white: '#FFFFFF',
      blue: '#3A80BA',
      red: '#E7192E',
      redText: '#EB5757',
    },
    button: '#3A80BA',
  },
  spacing: val => `${4 * val}px`,
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  colors: {
    textColorMain: '#e4eafc',
    textColorSecondary: '#75aba8',
    bgColorMain: '#75aba8',
    bgColorSecondary: '#e4eafc',
    accentColor: '#FF751D',
    accentColorSecondary: '#FFDAC0',
    colorMain: '#75aba8',
    colorSecondary: '#e4eafc',
    black: '#000000',
    white: '#FFFFFF',
    red: '#E7192E',
    green: '#407946',
    redText: '#EB5757',
  },
});
