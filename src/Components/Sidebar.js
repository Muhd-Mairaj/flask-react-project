import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <Navbar sticky="top" expand="md" bg="dark" className="flex-row Sidebar nav">
      <Navbar.Brand href="#home">Tracker</Navbar.Brand>

      <Nav.Item>
        <Nav.Link as={NavLink} to="/" className="App-link" end>Home</Nav.Link>
      </Nav.Item>
      
      &nbsp;|&nbsp;
      
      <Nav.Item>
        <Nav.Link as={NavLink} to="/test" className="App-link">Test</Nav.Link>
      </Nav.Item>
    </Navbar>
  );
}

export default Sidebar;