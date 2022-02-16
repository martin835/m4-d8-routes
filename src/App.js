import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";
import TvShows from "./components/TvShows"
import MovieDetails from "./components/MovieDetails"

import './App.css';
import SearchParent from "./components/SearchChild2";
import SearchChild from "./components/SearchChild1";
import SearchWrapper from "./components/SearchWrapper";
import NetflixBody from "./components/NetflixBody";

import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  state={
    searchQuery: "Shrek"
  }

setSearchQuery = (str) => {
  this.setState({searchQuery: str})
}


  render() {
    return (
      <BrowserRouter>
        <MyNavbar
          textColor="white"
          textMargin="10px"
          setSearchQuery={this.setSearchQuery}
        />

        <Routes>
          <Route
            path="/"
            element={<NetflixBody searchQuery={this.state.searchQuery} />}
          />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/:movieID" element={<MovieDetails />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>

        {/* <SearchWrapper/> */}
        <MyFooter />
      </BrowserRouter>
    );
  }
}
