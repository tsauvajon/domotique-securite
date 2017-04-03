import React, { Component, PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class ContextWrapper extends Component {
  getChildContext() {
    return { muiTheme: getMuiTheme() };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

ContextWrapper.propTypes = {
  children: React.PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node,
  ]),
};

ContextWrapper.defaultProps = {
  children: [],
};

ContextWrapper.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default ContextWrapper;
