import React, { Component, PropTypes } from 'react';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import './style.css';

class PrismMenuItem extends Component {
  handleTouchTap() {
    this.props.onTouchTap();
  }

  render() {
    return (
      <div className="prism-menu-item">
        <Link to={this.props.to}>
          <MenuItem onTouchTap={() => this.handleTouchTap()} >
            {this.props.icon}
            &nbsp;
            {this.props.label}
          </MenuItem>
        </Link>
      </div>
    );
  }
}

PrismMenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onTouchTap: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
};

export default PrismMenuItem;
