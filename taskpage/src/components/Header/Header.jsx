import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/logom.png'; 
import heart from '../../assets/heart.svg'; 
import './header.css'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-white">
      <Container className="d-flex justify-content-between">
        {/* Left-side navigation */}
        <Nav className="nav-left nav-items">
          <Nav.Link href="#">Services</Nav.Link>
          <Nav.Link href="#" className="text-warning fw-bold">Properties</Nav.Link> {/* Highlighted link */}
          <Nav.Link href="#">Testimonials</Nav.Link>
        </Nav>

        {/* Centered Logo */}
        <Navbar.Brand href="#" className="mx-auto">
          <img src={logo} alt="Logo" height="30" />
        </Navbar.Brand>

        {/* Right-side navigation */}
        <Nav className="nav-right nav-items">
          <Nav.Link href="#">About Us</Nav.Link>
          <Nav.Link href="#">Contact Us</Nav.Link>
          <Nav.Link className='heart' href="#"><img src={heart} alt="" /></Nav.Link> {/* Heart icon */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
