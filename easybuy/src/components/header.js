import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const header=()=>{
    return(
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">EasyBuy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/cart"><i className='fas fa-cart-plus'></i> Cart</Nav.Link>
              <Nav.Link href="/login"><i className='fas fa-user'></i> Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    );

}

export default header;