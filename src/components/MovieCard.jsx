import { Card, Col, Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"

const MovieCard = ({id, img, title, year}) => {
    
    const navigate = useNavigate();
    


    return (
      <Col xs={6} md={3} xl={2}>
        <Card key={id} className="bg-dark text-white">
          <Card.Img variant="top" src={img} alt="Card image" />
          <Card.Body>
            <Card.Text>
              {title}, {year}{" "}
              <Button variant="link" onClick={() => navigate("/" + id)  }>
                Details
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
}

export default MovieCard


         /*  <Card  
            key={id}
            className="bg-dark text-white"
            
          >
            <Card.Img src={img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{year}</Card.Text>
              <Card.Text></Card.Text>
            </Card.ImgOverlay>
          </Card> */