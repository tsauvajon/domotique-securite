import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from '../Admin';
import Accounts from '../Accounts';
import PushButtons from '../PushButtons';
import NotFound from '../NotFound';

const Content = () => (
  <div className="prism-content">
    <Switch>
      <Route path="/domotique-securite/admin" component={Admin} />
      <Route path="/domotique-securite/accounts" component={Accounts} />
      <Route path="/" component={PushButtons} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Content;
