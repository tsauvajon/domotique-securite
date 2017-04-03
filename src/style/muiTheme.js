import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  teal700,
  teal500,
  teal100,
  white,
  blueA200,
  blueA600,
  blueA800,
  grey900,
  // grey600,
  grey400,
  fullBlack,
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal500,
    primary2Color: teal700,
    primary3Color: teal100,
    accent1Color: blueA200,
    accent2Color: blueA600,
    accent3Color: blueA800,
    textColor: grey900,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey400,
    // disabledColor: fade(darkBlack, 0.3),
    // pickerHeaderColor: cyan500,
    // clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  appBar: {
    height: 50,
  },
});

export default muiTheme;
