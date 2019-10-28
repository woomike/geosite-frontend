import React, { Component } from 'react';
import GeositeNavBar from './components/GeositeNavBar'
import Map from './components/Map'
import { losAngelesCoordinates,
  workCoordinates,
  residenceCoordinates } from './data'

export default class App extends Component {
  initialState = {
    center: {
      lat: losAngelesCoordinates.lat,
      lng: losAngelesCoordinates.lng
    },
    zoom: 11
  }
  state = this.initialState
  handleWorkNavItemClick = (type) => {

  }
  handleResidenceNavItemClick = (type) => {

  }

  render () {
    return (
      <div>
        <GeositeNavBar
          handleWorkNavItemClick={this.handleWorkNavItemClick}
          handleResidenceNavItemClick={this.handleResidenceNavItemClick}
        />
        <Map
          center={this.state.center}
          zoom={this.state.zoom}
          workCoordinates={workCoordinates}
          residenceCoordinates={residenceCoordinates}
        />
      </div>
    )
  }
}