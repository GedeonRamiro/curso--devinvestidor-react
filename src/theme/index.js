import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createTheme({
  palette: {
    primary: {
      main: '#083796',
      contrastText: '#fff'
    },
    secondary: {
      main: '#08967D'
    },
  },
  shape:{
    borderRadius: 4
  },
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'primary'
    },
  MuiTextField: {
      variant: 'outlined',
      fullWidth: true
    }
  }
});

window['theme'] = theme;

export default theme;