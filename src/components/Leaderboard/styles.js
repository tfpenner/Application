import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";

export const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },

  paper: {
    marginTop: theme.spacing(8),
    alignItems: "center"
  },

  checkUser: {
    margin: theme.spacing(3),
    alignItems: "center"
  }
}));

export const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    background: {
      default: "#303030"
    }
  },

  typography: {
    h1: {
      fontSize: 30,
      font: "Roboto",
      fontStyle: "italic"
    }
  }
});
