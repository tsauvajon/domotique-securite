import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import dateFormat from 'dateformat';

const getClass = (state) => {
  switch (state) {
    case 'delivered':
      return {
        container: '#b2dfdb',
        text: '#e0f2f1',
      };
    case 'sent':
      return {
        container: '#c5cae9',
        text: '#e8eaf6',
      };
    default:
    case 'pending':
      return {
        container: '#e1bee7',
        text: '#f3e5f5',
      };
  }
};

const Order = props => (
  <div className="push-paper">
    <Card
      containerStyle={{
        backgroundColor: getClass(props.state).container,
      }}
    >
      <CardHeader
        title={`Le ${dateFormat(props.date, 'dd/mm/yyyy à hh:MM')}`}
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
