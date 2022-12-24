import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <Navbar sticky="top" expand="md" bg="dark" className="flex-row Sidebar nav">
      <Navbar.Brand href="#home">Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/" className="App-link" end>Home</Nav.Link>
          </Nav.Item>
          
          &nbsp;|&nbsp;
          
          <Nav.Item>
            <Nav.Link as={NavLink} to="/test" className="App-link">Test</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="ms-auto">
          &nbsp;|&nbsp;
          <Nav.Item>
            <Nav.Link as={NavLink} href="#" className="App-link" end>Logout</Nav.Link>
          </Nav.Item>
          
          
          <Nav.Item>
            <Nav.Link as={NavLink} to="/test" className="App-link">Test</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>


    </Navbar>
  );
}

export default Sidebar;