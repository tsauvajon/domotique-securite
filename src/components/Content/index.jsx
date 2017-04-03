import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from '../Admin';
import Types from '../Types';
import Documents from '../Documents';
import NotFound from '../NotFound';

const Content = () => (
  <div className="prism-content">
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/types" component={Types} />
      <Route exact path="/" component={Documents} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Content;
