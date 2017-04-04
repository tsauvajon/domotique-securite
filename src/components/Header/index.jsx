import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import ContextWrapper from '../ContextWrapper';
import './style.css';

const Header = props => (
  <ContextWrapper>
    <Paper zDepth={4} className={'push-header'}>
      <h2>
        {props.title}
      </h2>
    </Paper>
  </ContextWrapper>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
