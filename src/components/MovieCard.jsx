import { Card, Col } from "react-bootstrap";

const MovieCard = ({id, img, title, year}) => {
    return (
      <Col xs={6} md={4} xl={3}> 
        <Card
          key={id}
          className="bg-dark text-white"
          /* style={{height: "150px"}} */
        >
          <Card.Img src={img} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{year}</Card.Text>
            <Card.Text></Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Col>
    );
}

export default MovieCard