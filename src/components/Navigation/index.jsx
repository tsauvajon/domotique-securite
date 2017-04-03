import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import PrismMenuItem from '../PrismMenuItem';

// const accountIcon = <FontIcon className="material-icons md-48">account_circle</FontIcon>;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
  }

  // handle tap sur le burger menu icon
  handleTouchTap() {
    this.handleToggle();
  }

  // toggle l'état ouvert/fermé du Drawer
  handleToggle() {
    this.setState({
      drawerOpen: !this.state.drawerOpen,
    });
  }

  // ferme le Drawer
  handleClose() {
    this.setState({
      drawerOpen: false,
    });
  }

  render() {
    return (
      <div>
        <AppBar
          title="Prism"
          onLeftIconButtonTouchTap={() => this.handleTouchTap()}
          iconElementRight={
            <Link to="/">
              <Logo />
            </Link>
          }
        />
        <Drawer
          docked={false}
          open={this.state.drawerOpen}
          onRequestChange={drawerOpen => this.setState({ drawerOpen })}
        >
          <AppBar
            title="T. Sauvajon"
            iconElementLeft={
              <IconButton iconClassName="material-icons">
                account_circle
              </IconButton>
            }
          />
          <PrismMenuItem
            to="/"
            label="Documents"
            onTouchTap={() => this.handleTouchTap()}
          />
          <PrismMenuItem
            to="/admin/config"
            label="Administration"
            onTouchTap={() => this.handleTouchTap()}
          />
          <PrismMenuItem
            to="/types"
            label="Types"
            onTouchTap={() => this.handleTouchTap()}
          />
        </Drawer>
      </div>
    );
  }
}


  // <MenuItem
  //   onTouchTap={() => this.handleTouchTap()}
  //   style={{
  //     backgroundColor: '#009688',
  //     color: 'white',
  //     fontSize: 'x-large',
  //   }}
  // >
  //   {accountIcon}
  //   &nbsp;&nbsp;Thomas Sauvajon
  // </MenuItem>

Navigation.propTypes = {
  drawerOpen: PropTypes.bool,
};

Navigation.defaultProps = {
  drawerOpen: false,
};

export default Navigation;
