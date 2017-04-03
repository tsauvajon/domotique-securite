import React from 'react';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
// import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from '../components/NotFound';
// import PrismMenuItem from '../components/PrismMenuItem';
// import recursivePropsTesting from '../recursivePropsTesting';

const div = document.createElement('div');

/* NotFound */

it('renders NotFound without crashing', () => {
  const props = {
    location: {
      pathname: '/',
    },
  };
  ReactDOM.render(<NotFound props={props} />, div);
});

/* PrismMenuItem */

// it('renders PrismMenuItem without crashing', () => {
//
// });

// it('clicks menu items correctly', () => {
//   const component = renderer.create(
//     <Router>
//       <PrismMenuItem
//         to="/"
//         label="Documents"
//         onTouchTap={() => {}}
//       />
//     </Router>,
//     div,
//   );
//
//   recursivePropsTesting(component, ['handleTouchTap']);
// });
