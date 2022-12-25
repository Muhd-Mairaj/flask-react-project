import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom';
import '../index.css'

function Header() {
  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

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