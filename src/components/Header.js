import React from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavbarBrand>
          Pokemon
        </NavbarBrand>
        <Nav>
          <NavItem><Link className="nav-link" to="/">Home</Link></NavItem> 
          <NavItem><Link className="nav-link" to="pokemons">Pokemons</Link></NavItem>
          <NavItem><Link className="nav-link" to="types">Types</Link></NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}