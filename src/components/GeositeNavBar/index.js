import React from 'react'
import PropTypes from 'prop-types'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export default function GeositeNavBar(props) {

  function handleAtomRainClick() { props.handleWorkClick('ATOMRAIN') }
  function handleWildebeestClick() { props.handleWorkClick('WILDEBEEST') }
  function handleSanguineClick() { props.handleWorkClick('SANGUINE') }
  function handlePaloAltoClick() { props.handleResidenceClick('PA') }
  function handleWestLosAngelesClick() { props.handleResidenceClick('WLA') }
  function handleMontereyParkClick() { props.handleResidenceClick('MPK') }

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand>Mike Woo's Places of Interest</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <div onClick={props.handleHomeClick}>
            <Nav.Link>Home</Nav.Link>
          </div>
          <NavDropdown title='Work' id='basic-nav-dropdown'>
            <div onClick={handleAtomRainClick}>
              <NavDropdown.Item>Atom Rain</NavDropdown.Item>
            </div>
            <div onClick={handleWildebeestClick}>
              <NavDropdown.Item>Wildebeest Design & Development</NavDropdown.Item>
            </div>
            <div onClick={handleSanguineClick}>
              <NavDropdown.Item>Sanguine Biosciences</NavDropdown.Item>
            </div>
          </NavDropdown>
          <NavDropdown title='Residences' id='basic-nav-dropdown'>
            <div onClick={handlePaloAltoClick}>
              <NavDropdown.Item>Palo Alto</NavDropdown.Item>
            </div>
            <div onClick={handleWestLosAngelesClick}>
              <NavDropdown.Item>West Los Angeles</NavDropdown.Item>
            </div>
            <div onClick={handleMontereyParkClick}>
              <NavDropdown.Item>Monterey Park</NavDropdown.Item>
            </div>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

GeositeNavBar.propTypes = {
  handleWorkClick: PropTypes.func.isRequired,
  handleResidenceClick: PropTypes.func.isRequired,
  handleHomeClick: PropTypes.func.isRequired
}