import { NavLink } from 'react-router-dom';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavDropdown from 'react-bootstrap/NavDropdown';

// import { useApi } from '../contexts/ApiProvider';
import { useUser } from '../contexts/UserProvider';
import '../index.css'


function Header() {
  // const api = useApi()
  const {user, logout} = useUser()

  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark" className="Header">
      <Container fluid>
        <Navbar.Brand href="/">Item Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {user ?
            <>
              <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/test">Test</Nav.Link>
              </Nav>
              <Nav className="HeaderEnd">
                  {/* <Nav.Link as={Button} variant="dark" className="logoutButton" onClick={logout}>Logout</Nav.Link> */}
                  <Navbar.Text className="small">
                    Signed in as:
                  </Navbar.Text>
                  <NavDropdown title={user.username} menuVariant="dark" size="sm" align="end" id="collapsible-nav-dropdown">
                    <NavDropdown.Item>Change Password</NavDropdown.Item>
                    <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="text-danger">
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