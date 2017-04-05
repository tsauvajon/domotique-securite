import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ActionAlarm from 'material-ui/svg-icons/action/alarm';
import MapsLocalShipping from 'material-ui/svg-icons/maps/local-shipping';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import Order from './Order';
import ZoomInPaper from '../../ZoomInPaper';
import mockOrders from '../../../mockups/orders';

const deliveredColor = '#b2dfdb';
const pendingColor = '#e1bee7';
const sentColor = '#c5cae9';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: mockOrders.sort((a, b) => a.date < b.date),
    };
  }
  render() {
    return (
      <center>
        <ZoomInPaper>
          <table>
            <tbody>
              <tr>
                <td>
                  <FloatingActionButton disabled disabledColor={pendingColor}>
                    <ActionAlarm />
                  </FloatingActionButton>
                </td>
                <td>
                  <FloatingActionButton disabled disabledColor={sentColor}>
                    <MapsLocalShipping />
                  </FloatingActionButton>
                </td>
                <td>
                  <FloatingActionButton disabled disabledColor={deliveredColor}>
                    <ActionDone />
                  </FloatingActionButton>
                </td>
              </tr>
              <tr>
                <td>
                  En attente
                </td>
                <td>
                  Envoyé
                </td>
                <td>
                  Livré
                </td>
              </tr>
            </tbody>
          </table>
        </ZoomInPaper>
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
              />
              ),
            )
          }
        </ReactCSSTransitionGroup>
      </center>
    );
  }
}

export default Orders;
