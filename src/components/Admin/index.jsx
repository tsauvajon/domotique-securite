import React, { Component, PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import BottomNav from '../BottomNav';
import Header from '../Header';

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
        <Header title={'Paramétrage'} />
        <BottomNav />
      </div>
    );
  }
}

Admin.childContextTypes = {
  muiTheme: PropTypes.object,
};

export default Admin;
