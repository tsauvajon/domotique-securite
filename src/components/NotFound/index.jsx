import React, { PropTypes } from 'react';

const NotFound = ({ location }) => (
  <div>
    <h1>Not Found : {location.pathname}</h1>
  </div>
);

NotFound.propTypes = {
  location: PropTypes.objectOf(PropTypes.string),
};

NotFound.defaultProps = {
  location: {
    pathname: 'Unknown path',
  },
};

export default NotFound;
