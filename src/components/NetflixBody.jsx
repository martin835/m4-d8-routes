import MyNavbar from './MyNavbar'

import { Container, Row, Col } from "react-bootstrap";
import MovieGallery from "./MovieGallery"
import { Component } from 'react';
import GallerySearch from "./GallerySearch"
import Toggle from './Toggle';


class NetflixBody extends Component {
  
 
  render() {
    return (
      <>
        <Container className="my-3">
          <Row>
            <Col xs={12}>
              <h1>Movies</h1>
              <Toggle/>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <MovieGallery query={this.props.searchQuery} />
          <MovieGallery query={"harry%20potter"} />
        </Container>
      </>
    );
  }
}



export default NetflixBody

