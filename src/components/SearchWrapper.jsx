import React, { Component } from 'react'
import SearchChild1 from './SearchChild1'
import SearchChild2 from './SearchChild2'

export default class SearchWrapper extends Component {
  state = {
    search: "",
  };

  updateSearch = (newSearchValue) => {
      console.log(newSearchValue);
      this.setState({ search: newSearchValue });
  }

  render() {
    return (
      <div>
        <h1>{this.state.search}</h1>
        <SearchChild1 onSearchChange={this.updateSearch} />
        <SearchChild2 search2={this.state.search} />
      </div>
    );
  }
}
