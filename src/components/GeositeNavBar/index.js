import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default class GeositeNavBar extends Component {
  render () {
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>Mike Woo's Places of Interest</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link>Home</Nav.Link>
            <NavDropdown title='Work' id='basic-nav-dropdown'>
              <NavDropdown.Item>Atom Rain</NavDropdown.Item>
              <NavDropdown.Item>Wildebeest Design & Development</NavDropdown.Item>
              <NavDropdown.Item>Sanguine Biosciences</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Residences' id='basic-nav-dropdown'>
              <NavDropdown.Item>Palo Alto</NavDropdown.Item>
              <NavDropdown.Item>West Los Angeles</NavDropdown.Item>
              <NavDropdown.Item>Monterey Park</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-success'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
