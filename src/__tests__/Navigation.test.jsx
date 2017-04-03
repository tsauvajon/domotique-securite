import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, BrowserRouter as Router } from 'react-router-dom';
// import ReactTestUtils from 'react-addons-test-utils';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navigation from '../components/Navigation';
import ContextWrapper from '../components/ContextWrapper';
import recursivePropsTesting from '../recursivePropsTesting';
import muiTheme from '../style/muiTheme';
import '../components/tap';


it('renders Navigation without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Navigation />
      </Router>
    </MuiThemeProvider>,
    div,
  );
});


it('clicks Menu Items correctly', () => {
  const div = document.createElement('div');
  // const renderer = ReactTestUtils.createRenderer();
  // renderer.render(
  //   <Router history={browserHistory}>
  //     <Navigation />
  //   </Router>);
  // const result = renderer.getRenderOutput();

  // console.log(renderer);

    // const result = renderer.create(
    //   <ContextWrapper>
    //     <Router>
    //       <div className="prism">
    //         <Navigation />
    //       </div>
    //     </Router>
    //   </ContextWrapper>,
    //   div,
    // );
  const result = renderer.create(
    <ContextWrapper>
      <Router history={browserHistory}>
        <Navigation />
      </Router>
    </ContextWrapper>,
    div,
  );

  console.log(result.toJSON());

  recursivePropsTesting(result.toJSON(), ['onTouchTap']);

  // const component = renderer.create(
  //     <Router history={browserHistory}>
  //       <Navigation />
  //     </Router>,
  //   div,
  // );


//     <MuiThemeProvider muiTheme={muiTheme}>
// </MuiThemeProvider>

  //   recursivePropsTesting(component.toJSON(), ['onTouchTap']);
});
