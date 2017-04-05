import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const getClass = (state) => {
  switch (state) {
    case 'delivered':
      return {
        container: '#b2dfdb',
        text: '#e0f2f1',
      };
    default:
    case 'pending':
      return {
        container: '#bbdefb',
        text: '#e3f2fd',
      };
  }
};

const Order = props => (
  <div className={'push-push-btn'}>
    <Card
      containerStyle={{
        backgroundColor: getClass(props.state).container,
      }}
    >
      <CardHeader
        title={props.date}
        actAsExpander
        showExpandableButton
        onTouchTap={() => {}}
      />
      <CardText
        expandable
        style={{
          backgroundColor: getClass(props.state).text,
        }}
      >
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
      </CardText>
    </Card>
  </div>
);

Order.propTypes = {
  date: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.object),
};

Order.defaultProps = {
  products: [],
};

export default Order;
