/*import { useState } from "react";
import { useLocation } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import '../styles/SimpleNavbar.css';


function SimpleNavbar() {
  const location = useLocation();

  const [servicesOpen, setServicesOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <Navbar expand="lg" className="simple-navbar">
      <Container>

        <Navbar.Brand>ARTFUL BYTES Blog</Navbar.Brand>

        <Navbar.Toggle aria-controls="simple-navbar-nav" />
        <Navbar.Collapse id="simple-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>

            <NavDropdown title="Services" id="services-dropdown" className={location.pathname.startsWith("/services") ? "active" : ""} show={servicesOpen} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>

            <NavDropdown.Item as={NavLink} to="/services#design" className={location.hash === "#design" ? "active" : ""}>Design</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/services#web" className={location.hash === "#web" ? "active" : ""}>Web Dev</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/services#etc" className={location.hash === "#etc" ? "active" : ""}>Etc</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Shop" id="shop-dropdown" className={location.pathname.startsWith("/shop") ? "active" : ""} show={shopOpen} onMouseEnter={() => setShopOpen(true)} onMouseLeave={() => setShopOpen(false)}>

            <NavDropdown.Item as={NavLink} to="/shop#tech" className={location.hash === "#tech" ? "active" : ""}>Tech</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/shop#kitchen" className={location.hash === "#kitchen" ? "active" : ""}>Kitchen</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/shop#books" className={location.hash === "#books" ? "active" : ""}>Books</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/shop#etc" className={location.hash === "#etc" ? "active" : ""}>Etc</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SimpleNavbar; */

import { useState } from "react";
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import '../styles/SimpleNavbar.css';

function SimpleNavbar() {
  return (
    <Navbar expand="lg" className="simple-navbar" >
      <Container>
         <Navbar className="bg-body-tertiary">
        
      </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
            <Nav.Link as={NavLink} to= "/about">ABOUT</Nav.Link>

            <NavDropdown title={<NavLink to ="/services" className="dropdown-title-link">SERVICES</NavLink>} id="services-dropdown" >
              <NavDropdown.Item as={NavLink} to="/services/design">Design</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/web">Web Dev</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services/logos">Logos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/services/etc">Etc</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<NavLink to ="/shop" className="dropdown-title-link">SHOP</NavLink>} id="shop-dropdown" >
              <NavDropdown.Item as={NavLink} to="/shop#tech">Tech</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/shop#kitchen">Kitchen</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/shop#books">Books</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/shop#etc">Etc</NavDropdown.Item>
            </NavDropdown>

       

             <Nav.Link as={NavLink} to= "/contact">CONTACT</Nav.Link>

             <Container>
         {/* <Navbar.Brand href="#home"><img alt="" src="../img/logo.svg" width="30" height="30" className="d-inline-block align-top"/>
          {' '} ARTFUL BYTES
          </Navbar.Brand>*/}
        </Container>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SimpleNavbar;