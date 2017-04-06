import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Paper from 'material-ui/Paper';

const ZoomInPaper = props => (
  <div className="push-paper">
    <ReactCSSTransitionGroup
      transitionName={{
        enter: 'zoomIn',
        enterActive: 'zoomIn',
        appear: 'zoomIn',
        appearActive: 'zoomIn',
      }}
      transitionAppear
      transitionAppearTimeout={1300}
      transitionEnterTimeout={1300}
      transitionLeave={false}
    >
      <Paper zDepth={1}>
        {props.children}
      </Paper>
    </ReactCSSTransitionGroup>
  </div>
);

ZoomInPaper.propTypes = {
  children: React.PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node,
  ]),
};

ZoomInPaper.defaultProps = {
  children: [],
};

export default ZoomInPaper;
