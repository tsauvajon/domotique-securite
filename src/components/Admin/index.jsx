import React, { Component, PropTypes } from 'react';
import { Switch, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import BottomNav from '../BottomNav';
import Header from '../Header';
import NotFound from '../NotFound';
import Settings from './Settings';
import Planning from './Planning';
import Orders from './Orders';

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
        <Switch>
          <Route exact path="/admin/settings" component={Settings} />
          <Route exact path="/admin/planning" component={Planning} />
          <Route exact path="/admin/orders" component={Orders} />
          <Route component={NotFound} />
        </Switch>
        <BottomNav />
      </div>
    );
  }
}

Admin.childContextTypes = {
  muiTheme: PropTypes.object,
};

export default Admin;
