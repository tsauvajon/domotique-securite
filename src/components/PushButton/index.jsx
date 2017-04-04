import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
// import FontIcon from 'material-ui/FontIcon';
import ProductSearch from '../ProductSearch';
import './style.css';

// const addIcon = <FontIcon className="material-icons md-48">settings_remote</FontIcon>;
// const editIcon = <FontIcon className="material-icons md-48">create</FontIcon>;

  // <CardActions expandable>
  //   {addIcon}
  //   {editIcon}
  // </CardActions>


const PushButton = props => (
  <div className={'push-push-btn'}>
    <Card>
      <CardHeader
        title={props.name}
        actAsExpander
        showExpandableButton
      />
      <CardText expandable>
        <ProductSearch />
      </CardText>
    </Card>
  </div>
);

PushButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PushButton;
