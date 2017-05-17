import React, { PropTypes } from 'react';
import Header from '../Header';
import Login from '../Login';

const Accounts = props => (
  <div>
    <Header title={'Comptes'} />
    <Login
      onConnectFb={payload => props.onConnectFb(payload)}
      onConnectGoogle={payload => props.onConnectGoogle(payload)}
    />
  </div>
);

Accounts.propTypes = {
  onConnectFb: PropTypes.func.isRequired,
  onConnectGoogle: PropTypes.func.isRequired,
};

export default Accounts;
