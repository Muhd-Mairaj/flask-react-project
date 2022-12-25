import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom';
import '../index.css'

function Header() {
  return (
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark" className="Header">
      <Container>
        <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/test">Test</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as=[NavLink] to="/" href="#deets">More deets</Nav.Link>
            <Nav.Link as=[NavLink] to="/" eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark" className="Header">
    //   <Container>
    //     <Navbar.Brand href="/">Tracker</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //           <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
    //           <Nav.Link as={NavLink} to="/test">Test</Nav.Link>
    //       </Nav>
    //       <Nav>
    //           <Nav.Link as={NavLink} to="/logout" end>Logout</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default Header;