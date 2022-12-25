import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom';
import '../index.css'

function Sidebar() {
  return (
    <Navbar sticky="top" expand="sm" bg="dark" className="flex-row Sidebar nav">
      <Container>

        <Navbar.Brand href="/">Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/" className="App-link" end>Home</Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link as={NavLink} to="/test" className="App-link">Test</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/logout" className="App-link" end>Logout</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>


    </Navbar>
  );
}

export default Sidebar;