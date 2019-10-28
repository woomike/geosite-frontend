import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'

class Map extends Component {
  render() {
    return (
      <div style={{height: '90vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <MapMarker
          lat={34.040857}
          lng={-118.444013}
          text={'West Los Angeles'}
        />
        <MapMarker
          lat={37.442788}
          lng={-122.139112}
          text={'Palo Alto'}
        />
        <MapMarker
          lat={34.061353}
          lng={-118.118601}
          text={'Monterey Park'}
        />
        <MapMarker
          lat={34.021233}
          lng={-118.481437}
          text={'Atom Rain'}
        />
        <MapMarker
          lat={33.972629}
          lng={-118.449782}
          text={'Wildebeest'}
        />
        <MapMarker
          lat={34.161795}
          lng={-118.448313}
          text={'Sanguine Biosciences'}
        />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;