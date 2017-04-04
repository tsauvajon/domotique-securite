import React, { Component, PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PushButton from '../PushButton';
import Header from '../Header';

class PushButtons extends Component {
  constructor(props) {
    super(props);
    const pushButtons = [
      'Lessive',
      'PQ',
      'Produit vaisselle',
    ];
    this.state = {
      pushButtons,
    };
  }
  // Récupère le context.theme
  getChildContext() {
    return { muiTheme: getMuiTheme() };
  }

  // getButtons() {
  //   const buttons = this.state.pushButtons.reduce((accumulateur, valeur) => (
  //     accumulateur + <PushButton name={valeur} />
  //   ));
  //   return buttons;
  // }

  handleTouchTap() {
    const pushButtons = this.state.pushButtons.concat('Nouveau bouton');
    this.setState({
      pushButtons,
    });
  }

  render() {
    return (
      <div>
        <Header title={'Boutons Push'} />
        {this.state.pushButtons.map(
          btn => (<PushButton name={btn} />),
        )}
        <FloatingActionButton
          style={{
            marginRight: 20,
            position: 'absolute',
            bottom: '2%',
            right: '2%',
          }}
          onTouchTap={() => this.handleTouchTap()}
        >
          <ContentAdd />
        </FloatingActionButton>
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
