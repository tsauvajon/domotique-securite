import React, { Component, PropTypes } from 'react';
// import jsonp from 'jsonp-promise';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PushButton from '../PushButton';
import Header from '../Header';
// import mockPushButtons from '../../mockups/pushButtons';
import muiTheme from '../../style/muiTheme';

const userId = 1;
const url = `//localhost:4000/api/users/${userId}/boutons`;

// async function getButtons() {
// }

class PushButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushButtons: [],
    };
  }

  // Récupère le context.theme
  getChildContext() {
    return { muiTheme: getMuiTheme() };
  }

  componentWillMount() {
    fetch(url)
    .then(res => res.json())
    // on mappe le résultat pour former l'objet comme on veut
    .then((data) => {
      const pushButtons = data.map(
        ({ nom, adresse_mac, id, id_user }) => ({
          name: nom,
          macAddress: adresse_mac,
          id,
          userId: id_user,
        }),
      );
      this.setState({ pushButtons });
    });
  }

  // Gère le clic sur le Floating Action Button
  handleFABTouchTap() {
    const pushButtons = this.state.pushButtons.concat({
      id: Math.floor(Math.random() * 8999) + 1000,
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
            ({ name, id }) => (
              <PushButton
                key={`push-btn-${name}-${id}`}
                id={id}
                name={name}
                // products={products}
                onTouchTap={() => {}}
              />),
            )
          }
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName={{
            enter: 'zoomInDelayed',
            enterActive: 'zoomInDelayed',
            appear: 'zoomInDelayed',
            appearActive: 'zoomInDelayed',
          }}
          transitionAppear
          transitionAppearTimeout={1300}
          transitionEnterTimeout={1300}
          transitionLeave={false}
        >
          <FloatingActionButton
            style={{
              marginRight: 20,
              position: 'fixed',
              bottom: '2%',
              right: '2%',
              zIndex: 500,
            }}
            zDepth={4}
            onTouchTap={() => this.handleFABTouchTap()}
            backgroundColor={muiTheme.palette.accent1Color}
          >
            <ContentAdd />
          </FloatingActionButton>
        </ReactCSSTransitionGroup>
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
