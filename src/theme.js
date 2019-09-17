import {red} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    subtitle1: {
      textAlign: 'center'
    },
    body2: {
      textAlign: 'center'
    },
    fontSize: 13
  },
  palette: {
    primary: {
      background: '#565656',
      backgroundLight: '#9e9e9e',
      main: '#05E5E5'
    },
    secondary: {
      light:"#ffffff",
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
});

export default theme;
