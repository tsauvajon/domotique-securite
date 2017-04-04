import React from 'react';
import ReactDOM from 'react-dom';
import PushButtons from './';

it('renders Types without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PushButtons />, div);
});
