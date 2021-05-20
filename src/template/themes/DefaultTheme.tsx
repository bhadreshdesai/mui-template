import { createMuiTheme, Theme } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";

const defaultTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[500]
    }
  }
});

export default defaultTheme;
