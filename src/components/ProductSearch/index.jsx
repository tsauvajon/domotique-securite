import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import ContentAdd from 'material-ui/svg-icons/content/add';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
import jsonp from 'jsonp-promise';
// import muiTheme from '../../style/muiTheme';
import './style.css';

const googleAutoSuggestURL = '//suggestqueries.google.com/complete/search?output=firefox&hl=fr&q=';

class ProductSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  async handleUpdateInput(input) {
    if (input === '') {
      return;
    }

    const url = googleAutoSuggestURL.concat(input);

    try {
      const data = await jsonp(url, { param: 'jsonp' }).promise;
      const dataSource = data[1];
      this.setState({
        dataSource,
      });
    } catch (err) {
      // TODO: gérer l'erreur
      console.log(err); // eslint-disable-line

      this.setState({
        dataSource: [input],
      });
    }
  }

  render() {
    return (
      <div className={'push-autocomplete-search'}>
        <AutoComplete
          id={'productSearchAutoComplete'}
          dataSource={this.state.dataSource}
          onUpdateInput={input => this.handleUpdateInput(input)}
        />
        <ContentAdd />
      </div>
    );
  }
}

export default ProductSearch;
