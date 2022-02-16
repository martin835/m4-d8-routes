import { Component } from "react";
import { Container, Form } from "react-bootstrap";

class SearchChild1 extends Component {
  state = {
      childText: ""
  };

  onChange 

  render() {
    return (
      <Container>
         <Form.Control  type="text" placeholder="Child text" className="w-50 mt-5"  onChange={(e) => {
           this.props.onSearchChange(e.currentTarget.value);
           this.setState({childText: e.currentTarget.value})
         }} />
      </Container>
    );
  }
}

export default SearchChild1;
