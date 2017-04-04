import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
// import FontIcon from 'material-ui/FontIcon';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import ProductSearch from '../ProductSearch';
import './style.css';

// const addIcon = <FontIcon className="material-icons md-48">settings_remote</FontIcon>;
// const editIcon = <FontIcon className="material-icons md-48">create</FontIcon>;

// <CardActions expandable>
//   {addIcon}
//   {editIcon}
// </CardActions>


const PushButton = props => (
  <div className={'push-push-btn'}>
    <Card>
      <CardHeader
        title={props.name}
        actAsExpander
        showExpandableButton
      />
      <CardText expandable>
        <List>
          <Subheader>Produits</Subheader>
          {
            props.products.map(product => (
              <ListItem
                key={product.url}
                primaryText={product.name}
                leftAvatar={<Avatar src={product.img} />}
              />
            ))
          }
        </List>
        <Divider />
        <ProductSearch />
      </CardText>
    </Card>
  </div>
);

PushButton.propTypes = {
  name: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object),
};

PushButton.defaultProps = {
  products: [],
};

export default PushButton;
