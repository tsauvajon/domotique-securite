import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class ProductSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      input: '',
    };
  }

  handleUpdateInput() {
    const dataSource = [];
    this.setState({
      dataSource,
    });
  }

  render() {
    return (
      <AutoComplete
        dataSource={this.state.dataSource}
        onUpdateInput={this.handleUpdateInput}
      />
    );
  }
}

export default ProductSearch;
