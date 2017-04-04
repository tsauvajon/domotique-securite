import React, { Component, PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ProductSearch from '../ProductSearch';

class PushButtons extends Component {
  // Récupère le context.theme
  getChildContext() {
    return { muiTheme: getMuiTheme() };
  }

  render() {
    return (
      <div>
        <h2>Liste des boutons Push</h2>
        <ProductSearch />
      </div>
    );
  }
}


// Validation react :

// Child contexts
PushButtons.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default PushButtons;
