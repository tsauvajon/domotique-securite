import React, { Component, PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import uuid from 'uuid/v4';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PushButton from '../PushButton';
import Header from '../Header';

class PushButtons extends Component {
  constructor(props) {
    super(props);
    const pushButtons = [
      {
        id: uuid(),
        name: 'Lessive',
        products: [
          {
            name: 'X Tra lessive liquide 1.89L',
            price: 10.44,
            url: 'https://www.amazon.fr/Tra-Lessive-Liquide-Marseille-Lavages/dp/B00WQRRRUG',
            img: 'https://images-na.ssl-images-amazon.com/images/I/71P2R5xiiUL._SL1500_.jpg',
          },
          {
            name: 'Décolor Stop Etui de 35',
            price: 5.71,
            url: 'https://www.amazon.fr/Eau-Ecarlate-Décolor-Stop-Lingettes/dp/B0091OVISY',
            img: 'https://images-na.ssl-images-amazon.com/images/I/81SnnG2DT4L._SL1500_.jpg',
          },
        ],
      },
      {
        id: uuid(),
        name: 'Cuisine',
        products: [
          {
            name: 'Set de 3 éponges Spontex',
            price: 1.60,
            url: 'https://www.amazon.fr/Spontex-Set-Eponges-Combinés-Grattantes/dp/B01KVK58SW',
            img: 'https://images-na.ssl-images-amazon.com/images/I/71RO704nPiL._SL1500_.jpg',
          },
        ],
      },
      {
        id: uuid(),
        name: 'Toilettes',
        products: [
          {
            name: 'Scottex papier toilette 16 rouleaux',
            price: 4.49,
            url: 'https://www.amazon.fr/Scottex-Papier-Toilette-16-Rouleaux/dp/B01MY82RQF',
            img: 'https://images-na.ssl-images-amazon.com/images/I/81hBOGrCsGL._SL1500_.jpg',
          },
        ],
      },
    ];
    this.state = {
      pushButtons,
    };
  }
  // Récupère le context.theme
  getChildContext() {
    return { muiTheme: getMuiTheme() };
  }

  // Gère le clic sur le Floating Action Button
  handleTouchTap() {
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
          {
            this.state.pushButtons.map(
            btn => (
              <PushButton
                key={`push-btn-${btn.name}-${btn.id}`}
                name={btn.name}
                products={btn.products}
                onTouchTap={() => {}}
              />),
            )
          }
        </center>
        <FloatingActionButton
          style={{
            marginRight: 20,
            position: 'fixed',
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
