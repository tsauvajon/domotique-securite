import React from 'react';
import ReactDOM from 'react-dom';
import Types from '../components/Types';

it('renders Types without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Types />, div);
});
