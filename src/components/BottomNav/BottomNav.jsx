import React, { Component, PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import './style.css';


const paramIcon = <FontIcon className="material-icons md-48">build</FontIcon>;
const planningIcon = <FontIcon className="material-icons md-48">event</FontIcon>;
const ordersIcon = <FontIcon className="material-icons md-48">local_shipping</FontIcon>;

class BottomNav extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
  }

  // Récupère le context.muiTheme
  getChildContext() {
    return {
      muiTheme: getMuiTheme(),
    };
  }

  select(id) {
    this.setState({
      selectedIndex: id,
    });
  }

  render() {
    return (
      <Paper zDepth={2} className="prism-bottom-nav" style={{ bottom: '1px', position: 'absolute', width: '100%' }}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <Link to="/admin/settings" onTouchTap={() => this.select(0)}>
            <BottomNavigationItem
              label="Livraison mini"
              icon={paramIcon}
              selected={this.state.selectedIndex === 0}
            />
          </Link>
          <Link to="/admin/planning" onTouchTap={() => this.select(1)}>
            <BottomNavigationItem
              label="Horaires"
              icon={planningIcon}
              selected={this.state.selectedIndex === 1}
            />
          </Link>
          <Link to="/admin/orders" onTouchTap={() => this.select(2)}>
            <BottomNavigationItem
              label="Commandes"
              icon={ordersIcon}
              selected={this.state.selectedIndex === 2}
            />
          </Link>
        </BottomNavigation>
      </Paper>
    );
  }
}

// React validation

// Context

BottomNav.childContextTypes = {
  muiTheme: PropTypes.object,
};

export default BottomNav;
