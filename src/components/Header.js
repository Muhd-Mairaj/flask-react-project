import { NavLink } from 'react-router-dom';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavDropdown from 'react-bootstrap/NavDropdown';

// import { useApi } from '../contexts/ApiProvider';
import { useUser } from '../contexts/UserProvider';
import '../index.css'


function Header() {
  // const api = useApi()
  const {isLoggedIn, logout} = useUser()

  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark" className="Header">
      <Container fluid>
        <Navbar.Brand href="/">Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isLoggedIn === true ?
            <>
              <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/test">Test</Nav.Link>
              </Nav>
              <Nav className="">
                  <Nav.Link as={Button} variant="dark" className="logoutButton" onClick={logout}>Logout</Nav.Link>
                  <Navbar.Text>
                    Signed in as: 
                  </Navbar.Text>
                  <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                    <NavDropdown.Item>Change Password</NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="text-danger"href="#action/3.4">
                      Delete Account
                    </NavDropdown.Item>
                  </NavDropdown>

              </Nav>
            </>
          :
            <>
              <Nav className="ms-auto">
                  <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                  <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
              </Nav>
            </>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;