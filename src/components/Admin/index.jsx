import React, { Component, PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import BottomNav from '../BottomNav';

class Admin extends Component {
  // Récupère le context
  getChildContext() {
    return {
      muiTheme: getMuiTheme(),
    };
  }

  render() {
    return (
      <div>
        <h2>Paramétrage</h2>
        <BottomNav />
      </div>
    );
  }
}

Admin.childContextTypes = {
  muiTheme: PropTypes.object,
};

export default Admin;
