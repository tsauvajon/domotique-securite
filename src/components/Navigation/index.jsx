import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import PrismMenuItem from '../PrismMenuItem';

// const accountIcon = <FontIcon className="material-icons md-48">account_circle</FontIcon>;

const buttonsIcon = <FontIcon className="material-icons md-48">settings_remote</FontIcon>;
const paramIcon = <FontIcon className="material-icons md-48">settings</FontIcon>;
const accountsIcon = <FontIcon className="material-icons md-48">account_box</FontIcon>;

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
          title="Push"
          onLeftIconButtonTouchTap={() => this.handleTouchTap()}
          iconElementRight={
            <Link to="/domotique-securite/">
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
            label="Boutons"
            onTouchTap={() => this.handleTouchTap()}
            icon={buttonsIcon}
          />
          <PrismMenuItem
            to="/admin/settings"
            label="Paramétrage"
            onTouchTap={() => this.handleTouchTap()}
            icon={paramIcon}
          />
          <PrismMenuItem
            to="/accounts"
            label="Comptes"
            onTouchTap={() => this.handleTouchTap()}
            icon={accountsIcon}
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
