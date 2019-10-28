import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarkerPNG from './map-marker.png'

const MapMarker= () => {
  const style = {width: '25px', height: '25px'}
  return (
    <img style={style} src={MapMarkerPNG} alt={'Map Marker'} />
  )
}

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 34.05,
      lng: -118.24
    },
    zoom: 11
  };

  render() {
    return (
      <div style={{height: '90vh', width: '70%' }}>
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