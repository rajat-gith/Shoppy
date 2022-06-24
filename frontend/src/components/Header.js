import React from 'react'
import {Navbar,Nav,Container,Row,Col} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <header>
        <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                  <Navbar.Brand >SHOPPY</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <LinkContainer to="/cart">
                      <Nav.Link ><i className='fas fa-shopping-cart m-1 p-1'></i>CART</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <Nav.Link ><i className='fas fa-user m-1 p-1'></i>LOGIN</Nav.Link>
                    </LinkContainer>                
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header