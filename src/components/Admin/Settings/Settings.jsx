import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Slider from 'material-ui/Slider';
import Subheader from 'material-ui/Subheader';
import ZoomInPaper from '../../ZoomInPaper';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: 20.0,
      minProducts: 4,
    };
  }

  handlePrice(event, minPrice) {
    this.setState({
      minPrice,
    });
  }

  handleProducts(event, minProducts) {
    this.setState({
      minProducts,
    });
  }

  render() {
    return (
      <ZoomInPaper>
        <List>
          <Subheader>Me livrer à partir de</Subheader>
          <ListItem>
            {`${this.state.minPrice} €`}
            <Slider
              min={0}
              max={50}
              step={0.5}
              defaultValue={20}
              value={this.state.minPrice}
              onChange={(event, value) => this.handlePrice(event, value)}
            />
          </ListItem>
          <ListItem>
            {`${this.state.minProducts} articles`}
            <Slider
              min={1}
              max={15}
              step={1}
              defaultValue={4}
              value={this.state.minProducts}
              onChange={(event, value) => this.handleProducts(event, value)}
            />
          </ListItem>
        </List>
      </ZoomInPaper>
    );
  }
}

export default Settings;
