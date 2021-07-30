import React from "react";
import Nav from 'react-bootstrap/Nav';
import {Container, Navbar} from "react-bootstrap";

// import  'NavBar.css';



function NavBar() {
  return (
    <>
      {/*<Nav defaultActiveKey="/" as="ul">*/}
      {/*  <Nav.Item as="li" variant="light">*/}
      {/*    <Nav.Link href="/">Home</Nav.Link>*/}
      {/*  </Nav.Item>*/}
      {/*  <Nav.Item as="li">*/}
      {/*    <Nav.Link href="/favourites">Favourites</Nav.Link>*/}
      {/*  </Nav.Item>*/}
      {/*</Nav>*/}

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Shani Yaron Weather App</Navbar.Brand>
          <Nav >
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/favourites">Favourites</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;