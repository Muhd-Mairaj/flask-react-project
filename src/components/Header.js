import { useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import '../index.css'

function Header({ loggedIn }) {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setIsAuthenticated(true)
    }
    else {
      setIsAuthenticated(false)
    }
  }, [localStorage.getItem("access_token")])
  
  return (
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    // <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark" className="Header">
    //   <Container>
    //     <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <NavLink to="/" >Home</NavLink>
    //         <NavLink to="/test" >Test</NavLink>
    //       </Nav>
    //       <Nav>
    //         <NavLink to="/logout">Logout</NavLink>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark" className="Header">
      <Container fluid>
        <Navbar.Brand href="/">Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isAuthenticated === true ?
            <>
              <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/test">Test</Nav.Link>
              </Nav>
              <Nav>
                  <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
              </Nav>
            </>
          :
            <>
              <Nav className="ms-auto">
                  <Nav.Link as={NavLink} to="/login">login</Nav.Link>
                  <Nav.Link as={NavLink} to="/register">register</Nav.Link>
              </Nav>
            </>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;