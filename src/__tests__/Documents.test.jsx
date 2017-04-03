import React from 'react';
import ReactDOM from 'react-dom';
import Documents from '../components/Documents';

it('renders Types without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Documents />, div);
});
