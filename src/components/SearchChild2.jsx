import { Component } from "react";
import { Container, Form } from "react-bootstrap";

class SearchChild2 extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Form.Control
          type="text"
          placeholder="Child text"
          className="w-50 mt-5"
          value={this.props.search2}
        />
      </Container>
    );
  }
}

export default SearchChild2;