import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";

import './App.css';
import SearchParent from "./components/SearchChild2";
import SearchChild from "./components/SearchChild1";
import SearchWrapper from "./components/SearchWrapper";
import NetflixBody from "./components/NetflixBody";

import React, { Component } from 'react'

export default class App extends Component {
  state={
    searchQuery: "Shrek"
  }

setSearchQuery = (str) => {
  this.setState({searchQuery: str})
}


  render() {
    return (
      <div>
        <MyNavbar
          textColor="white"
          textMargin="10px"
          setSearchQuery={this.setSearchQuery}
        />
        <NetflixBody searchQuery={this.state.searchQuery} />

        {/* <SearchWrapper/> */}
        <MyFooter />
      </div>
    );
  }
}
