import React, { Component, PropTypes } from 'react';
import { browserHistory, BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Content from '../Content';
import Navigation from '../Navigation';
import muiTheme from '../../style/muiTheme';
import '../tap';
import './style.css';

class Prism extends Component {
  // Récupère le context.theme
  getChildContext() {
    return { muiTheme: getMuiTheme() };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={browserHistory}>
          <div className="prism">
            <Navigation />
            <Content />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

// Validation react :

// Child contexts
Prism.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default Prism;
