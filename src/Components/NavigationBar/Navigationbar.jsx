import './Navigationbar.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigationbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img className='brand' src="data:image/png;base64,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" alt="" />
            FaceGram
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          <Nav  className="justify-content-end" style={{ width: "100%" }}>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;