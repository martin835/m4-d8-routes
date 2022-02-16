// ASSIGNED TO GIORGIO
// This takes prop from it's parent (Netflix Body)
// and uses it to fetch array of objects
// and then passes props of the object to it's child (Movie Card)

import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

import { Component } from "react";

class MovieGallery extends Component {
  constructor(props) {
    super(props);
    /* this.setSearchQuery = this.setSearchQuery.bind(this); */

    this.state = { movies: [] };
  }

  componentDidMount = async () => {
    try {
     

      let response = await fetch(
        "http://www.omdbapi.com/?apikey=a0d093ea&s=" + this.props.query
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({ movies: data.Search });
        console.log(this.state.searchQuery);
      } else {
        alert("something wrong with the data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Row>        
        {this.state.movies.map((movie) => (
          <MovieCard id={movie.imdbID} img={movie.Poster} />
        ))}
      </Row>
    );
  }
}

export default MovieGallery;
