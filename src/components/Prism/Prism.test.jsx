import React from 'react';
import ReactDOM from 'react-dom';
import Prism from './';

it('renders Prism without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Prism />, div);
});
