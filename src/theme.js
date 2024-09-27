import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#001F3F',  // Your custom primary color
    },
    secondary: {
      main: '#FF4136',  // Your custom secondary color
    },
  },
  typography: {

    fontFamily: 'Roboto, Arial', },
});

export default theme;