import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import renderer from 'react-test-renderer';
import Admin from './';
// import recursivePropsTesting from '../recursivePropsTesting';
import '../tap';

const div = document.createElement('div');

it('renders Admin without crashing', () => {
  ReactDOM.render(
    <Router>
      <Admin />
    </Router>,
    div,
  );
});


it('clicks tabs correctly', () => {
  // const component = renderer.create(
  //   <Router>
  //     <Admin />
  //   </Router>,
  //   div,
  // );

  // recursivePropsTesting(component.toJSON(), ['onTouchTap']);
});
