
import {Navbar, Nav, Image, Form } from "react-bootstrap"
import {FiSearch} from "react-icons/fi"
import {BsBell} from 'react-icons/bs'
import NetflixLogo from "../data/netflix_logo.png"
import AvatarLogo from "../data/avatar.png"
import './MyNavbar.css'
import { Link } from "react-router-dom"

const MyNavbar = (props) => {
    

    return (
      <Navbar bg="dark" expand="lg">
        <Image className="netflixLogo" src={NetflixLogo} rounded />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <div className="nav-link" style={{ color: "white" }}>
                Home
              </div>
            </Link>
            <Link to="/tv-shows">
              <div className="nav-link" style={{ color: "white" }}>
                Tv Shows
              </div>
            </Link>
            <Nav.Link href="#link2" style={{ color: "white" }}>
              Movies
            </Nav.Link>
            <Nav.Link href="#link3" style={{ color: "white" }}>
              Recently Added
            </Nav.Link>
            <Nav.Link href="#link4" style={{ color: "white" }}>
              My List
            </Nav.Link>
          </Nav>
          <Form.Control
            className="w-25"
            type="text"
            placeholder="Search Movies"
            onChange={(e) => props.setSearchQuery(e.target.value)}
          />
        </Navbar.Collapse>
      </Navbar>
    );
}

export default MyNavbar