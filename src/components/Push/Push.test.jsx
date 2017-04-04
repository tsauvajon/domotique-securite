import React from 'react';
import ReactDOM from 'react-dom';
import Push from './';

it('renders Prism without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Push />, div);
});
