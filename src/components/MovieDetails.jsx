import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MovieDetails() {

const params = useParams();
console.log(params);

const [movie, setMovie] = useState({})

useEffect(()=> {
    fetchMovieDetail();

}, [])

const fetchMovieDetail = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=a0d093ea&i=" + params.movieID
      );
      if (response.ok) {
        let data = await response.json();        
        console.log(data);
        setMovie(data)
        
      } else {
        alert("something wrong with the data");
      }
    } catch (error) {
      console.log(error);
    }
}
    

  return (
    <Container className="my-3">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1>{movie.Title}</h1>
          <p>
            {movie.Year} |  {movie.Rated} |  {movie.Runtime} |  {movie.Language}
          </p>
          <p>{movie.Genre}</p>
          <p>{movie.Plot}</p>
          <img src={movie.Poster} />
        </Col>
      </Row>
    </Container>
  );
}
