import React, { Component, PropTypes } from 'react';
// import jsonp from 'jsonp-promise';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ProductSearch from '../ProductSearch';

const pushIcon = <FontIcon className="material-icons md-48">touch_app</FontIcon>;

class PushButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      url: `http://localhost:4000/api/boutons/${props.id}/products`,
    };
  }

  async handleExpand(newExpandedState) {
    if (!newExpandedState) {
      return;
    }

    fetch(this.state.url)
    .then(res => res.json())
    // on mappe le résultat pour former l'objet comme on veut
    .then((data) => {
      const products = data.map(
        ({ id, nom, image, prix, url }) => ({
          id,
          name: nom,
          price: prix,
          url,
          img: image,
        }),
      );
      this.setState({ products });
    });
  }

  render() {
    return (
      <div className={'push-push-btn'}>
        <Card
          onExpandChange={newExpandedState => this.handleExpand(newExpandedState)}
        >
          <CardHeader
            avatar={pushIcon}
            title={
              <TextField
                style={{ maxWidth: '200px' }}
                id="text-field-default"
                defaultValue={this.props.name}
              />
            }
            showExpandableButton
            onTouchTap={() => {}}
          />
          <CardText expandable>
            <List>
              <Subheader>Produits</Subheader>
              {
                this.state.products.map(product => (
                  <ListItem
                    key={product.url}
                    primaryText={product.name}
                    leftAvatar={<Avatar src={product.img} />}
                  />
                ))
              }
              <Divider />
              <Subheader>Ajouter</Subheader>
              <ProductSearch />
            </List>
          </CardText>
        </Card>
      </div>
    );
  }
}

PushButton.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  // products: PropTypes.arrayOf(PropTypes.object),
};

PushButton.defaultProps = {
  products: [],
};

export default PushButton;
