import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import jsonp from 'jsonp-promise';

const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?&hl=fr&q=';

class ProductSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      input: '',
    };
  }

  handleUpdateInput(input) {
    console.log('handling: ', input);
    const dataSource = [];
    this.setState({
      dataSource,
      input,
    });
    this.search();
  }

  search() {
    console.log('searching');
    if (this.state.input && this.state.input !== '') {
      const url = googleAutoSuggestURL.concat(this.state.input);
      jsonp(url)
        .then(dataSource => this.setState({
          dataSource,
        }))
        .catch(error => console.log(error));
    }
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
