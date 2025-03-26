import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';
import logoSmall from './img/logoSmall.png'
import './app.css';

export default function NavbarComponent() {
  return (
    <Navbar fixed="top" className="navbar">
      <Container>
      <Navbar.Brand href="/Home">
            <img
              src={logoSmall}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Cat Cafe logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink className="navLink" href="/Home">Főoldal</NavLink>
            <NavLink className="navLink" href="/Blog">Blog</NavLink>
            <NavLink className="navLink" href="/Booking">Asztalfoglalás</NavLink>
            <NavLink className="navLink" href="/Webshop">Webshop</NavLink>
            <NavLink className="navLink" href="/Contact">Kapcsolat</NavLink>
            <NavLink className="navLink" href="./About">Rólunk</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}