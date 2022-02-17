import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard"

export default function TvShows(props) {

const [series, setSeries] = useState([]);

useEffect(() => {    
  fetchSeriesOnLoad();
}, []);

useEffect(() => {    
    if(props.searchQuery){
      fetchSeriesOnSearch();
    }
}, [props.searchQuery]);


const fetchSeriesOnLoad = async () => {
  let show = "star trek";
  console.log(show);
  if (show.length > 4) {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=a0d093ea&s=${show}&type=series`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data.Search);

        setSeries(data.Search);

        console.log(series);
      } else {
        alert("something wrong with the data");
      }
    } catch (error) {
      console.log(error);
    }
  }
};

const fetchSeriesOnSearch = async () => {
  let show = props.searchQuery;
  console.log(show);
  if (show.length > 4) {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=a0d093ea&s=${show}&type=series`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data.Search);
        if (
          data.Search.length !== "undefined" &&
          props.searchQuery.length > 0
        ) {
          setSeries(data.Search);
        }
      } else {
        alert("something wrong with the data");
      }
    } catch (error) {
      console.log(error);
    }
  }
};


  return (
    <Container className="my-3">
      <Row>
        <Col>
          <h1>TV Shows</h1>
          <Row className="no-gutters">
            {series.map((show) => (
              <MovieCard
                id={show.imdbID}
                img={show.Poster}
                title={show.Title}
                year={show.Year}
              />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

