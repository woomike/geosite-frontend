import React, { Component } from 'react';
import GeositeNavBar from './components/GeositeNavBar'
import Map from './components/Map'
import { losAngelesCoordinates,
  workCoordinates,
  residenceCoordinates } from './data'
const DEFAULT_ZOOM_VALUE = 11

export default class App extends Component {
  initialState = {
    defaultCenter: losAngelesCoordinates,
    center: losAngelesCoordinates,
    defaultZoom: DEFAULT_ZOOM_VALUE,
    currentMarkerLocationKey: '',
  }
  state = this.initialState

  handleWorkClick = (type) => {
    const center = this.getWorkLocationCoordinates(type)
    this.setState({center, currentMarkerLocationKey: type})
  }
  handleResidenceClick = (type) => {
    const center = this.getResidenceLocationCoordinates(type)
    this.setState({center, currentMarkerLocationKey: type})
  }
  handleHomeClick = () => {
    const center = losAngelesCoordinates
    this.setState({center, currentMarkerLocationKey: ''})
  }

  getWorkLocationCoordinates = (type) => {
    switch (type) {
      case 'ATOMRAIN':
        return workCoordinates.atomRain
      case 'WILDEBEEST':
        return workCoordinates.wildebeest
      case 'SANGUINE':
        return workCoordinates.sanguine
      default:
        return losAngelesCoordinates
    }
  }
  getResidenceLocationCoordinates = (type) => {
    switch (type) {
      case 'PA':
        return residenceCoordinates.paloAlto
      case 'WLA':
        return residenceCoordinates.westLosAngeles
      case 'MPK':
        return residenceCoordinates.montereyPark
      default:
        return losAngelesCoordinates
    }
  }

  handleMarkerClick = (id, markerProps) => {
    const center = {lat: markerProps.lat, lng: markerProps.lng}
    this.setState({center, currentMarkerLocationKey: markerProps.locationKey})
  }

  render () {
    return (
      <div>
        <GeositeNavBar
          handleWorkClick={this.handleWorkClick}
          handleResidenceClick={this.handleResidenceClick}
          handleHomeClick={this.handleHomeClick}
        />
        <Map
          defaultCenter={this.state.defaultCenter}
          defaultZoom={this.state.defaultZoom}
          center={this.state.center}
          workCoordinates={workCoordinates}
          residenceCoordinates={residenceCoordinates}
          handleMarkerClick={this.handleMarkerClick}
        />
      </div>
    )
  }
}