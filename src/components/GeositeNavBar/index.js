import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default class GeositeNavBar extends Component {

  handleAtomRainClick = () => { this.props.handleWorkNavItemClick('ATOMRAIN') }
  handleWildebeestClick = () => {
    this.props.handleWorkNavItemClick('WILDEBEEST')
  }
  handleSanguineClick = () => { this.props.handleWorkNavItemClick('SANGUINE') }
  handlePaloAltoClick = () => {
    this.props.handleResidenceNavItemClick('PA')
  }
  handleWestLosAngelesClick = () => {
    this.props.handleResidenceNavItemClick('WLA')
  }
  handleMontereyParkClick = () => {
    this.props.handleResidenceNavItemClick('MPK')
  }

  render () {
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>Mike Woo's Places of Interest</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link>Home</Nav.Link>
            <NavDropdown title='Work' id='basic-nav-dropdown'>
              <div onClick={this.handleAtomRainClick}>
                <NavDropdown.Item>Atom Rain</NavDropdown.Item>
              </div>
              <div onClick={this.handleWildebeestClick}>
                <NavDropdown.Item>Wildebeest Design & Development</NavDropdown.Item>
              </div>
              <div onClick={this.handleSanguineClick}>
                <NavDropdown.Item>Sanguine Biosciences</NavDropdown.Item>
              </div>
            </NavDropdown>
            <NavDropdown title='Residences' id='basic-nav-dropdown'>
              <div onClick={this.handlePaloAltoClick}>
                <NavDropdown.Item>Palo Alto</NavDropdown.Item>
              </div>
              <div onClick={this.handleWestLosAngelesClick}>
                <NavDropdown.Item>West Los Angeles</NavDropdown.Item>
              </div>
              <div onClick={this.handleMontereyParkClick}>
                <NavDropdown.Item>Monterey Park</NavDropdown.Item>
              </div>
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
