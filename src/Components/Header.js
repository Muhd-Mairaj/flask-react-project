import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom';
import '../index.css'

function Header() {
  return (
    <Navbar fixed="top" expand="sm" bg="dark" className="flex-row Header nav">
      <Container>

        <Navbar.Brand href="/">Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto App-Link">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link as={NavLink} to="/test">Test</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/logout" end>Logout</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>


    </Navbar>
  );
}

export default Header;