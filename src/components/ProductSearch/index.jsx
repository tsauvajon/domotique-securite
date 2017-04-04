import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import jsonp from 'jsonp-promise';

const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?output=firefox&hl=fr&q=';

class ProductSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  async handleUpdateInput(input) {
    const url = googleAutoSuggestURL.concat(input);

    const data = await jsonp(url, { param: 'jsonp' }).promise;
    const dataSource = data[1];

    this.setState({
      dataSource,
    });
  }

  render() {
    return (
      <AutoComplete
        id={'productSearchAutoComplete'}
        dataSource={this.state.dataSource}
        onUpdateInput={input => this.handleUpdateInput(input)}
      />
    );
  }
}

export default ProductSearch;
