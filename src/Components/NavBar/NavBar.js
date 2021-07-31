import React from "react";
import CtoFButton from "../CtoFButton/CtoFButton";
import Nav from "react-bootstrap/Nav";
import { Container, Navbar } from "react-bootstrap";
import "./NavBar.css";
import img from "../../assets/weather-icon.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" id="navbar-brand">
            <img src={img} alt="weather-icon" className="weather-icon" />
            <span>Shani Yaron Weather App</span>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <CtoFButton />
            <Nav>
              <Nav.Link as={Link} to="/" className="navbar-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/favorites" className="navbar-link">
                Favorites
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
