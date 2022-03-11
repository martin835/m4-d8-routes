import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

import { Component } from "react";

class MovieGallery extends Component {
  state = {
    movies: [],
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.query !== this.props.query && this.props.query.length > 4)
      try {
        console.log(this.state.searchQuery);

        let response = await fetch(
          "http://www.omdbapi.com/?apikey=a0d093ea&s=" + this.props.query
        );
        if (response.ok) {
          let data = await response.json();
          if (data.Search !== "undefined") {
            this.setState({ movies: data.Search });
          }
        } else {
          alert("something wrong with the data");
        }
      } catch (error) {
        console.log(error);
      }
  };

  componentDidMount = async () => {
    const apiUrl = process.env.REACT_APP_BE_URL;
    console.log(apiUrl);

    try {
      let response = await fetch(`${apiUrl}/media`);
      if (response.ok) {
        let data = await response.json();
        this.setState({ movies: data });
        console.log(data);
      } else {
        alert("something wrong with the data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Row className="no-gutters">
        {this.state.movies.map((movie) => (
          <MovieCard
            id={movie.imdbID}
            img={movie.Poster}
            title={movie.Title}
            year={movie.Year}
          />
        ))}
      </Row>
    );
  }
}

export default MovieGallery;
