import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from '../Admin';
import Login from '../Login';
import PushButtons from '../PushButtons';
import NotFound from '../NotFound';

const Content = () => (
  <div className="prism-content">
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={PushButtons} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Content;
