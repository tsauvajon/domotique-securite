import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Order from './Order';
import mockOrders from '../../../mockups/orders';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: mockOrders,
    };
  }
  render() {
    return (
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
            this.state.orders.map(
            ({ date, state, id, products }) => (
              <Order
                key={`push-btn-${name}-${id}`}
                date={date}
                state={state}
                products={products}
                onTouchTap={() => {}}
              />),
            )
          }
        </ReactCSSTransitionGroup>
      </center>
    );
  }
}

export default Orders;
