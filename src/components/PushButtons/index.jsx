import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import uuid from 'uuid/v4';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PushButton from '../PushButton';
import Header from '../Header';
import mockPushButtons from '../../mockups/pushButtons';
import muiTheme from '../../style/muiTheme';
import './style.css';

class PushButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushButtons: mockPushButtons,
    };
  }
  // Récupère le context.theme
  getChildContext() {
    return { muiTheme: getMuiTheme() };
  }

  // Gère le clic sur le Floating Action Button
  handleFABTouchTap() {
    const pushButtons = this.state.pushButtons.concat({
      id: uuid(),
      name: 'Bouton Push',
    });
    this.setState({
      pushButtons,
    });
  }

  render() {
    return (
      <div>
        <Header title={'Boutons Push'} />
        <center>
          <ReactCSSTransitionGroup
            transitionName={{
              enter: 'bounceInUp',
              enterActive: 'bounceInUp',
              appear: 'bounceInUp',
              appearActive: 'bounceInUp',
            }}
            transitionAppear
            transitionAppearTimeout={0}
            transitionEnterTimeout={0}
            transitionLeave={false}
          >
            {
              this.state.pushButtons.map(
              ({ name, id, products }) => (
                <PushButton
                  key={`push-btn-${name}-${id}`}
                  name={name}
                  products={products}
                  onTouchTap={() => {}}
                />),
              )
            }
          </ReactCSSTransitionGroup>
        </center>
        <FloatingActionButton
          style={{
            marginRight: 20,
            position: 'fixed',
            bottom: '2%',
            right: '2%',
          }}
          onTouchTap={() => this.handleFABTouchTap()}
          backgroundColor={muiTheme.palette.accent1Color}
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
