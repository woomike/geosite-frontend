import React from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'

export default function Map(props) {
  return (
    <div style={{height: '90vh', width: '100%' }}>
      <GoogleMapReact
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
      <MapMarker
        lat={props.residenceCoordinates.westLosAngeles.lat}
        lng={props.residenceCoordinates.westLosAngeles.lng}
        text={'West Los Angeles'}
      />
      <MapMarker
        lat={props.residenceCoordinates.paloAlto.lat}
        lng={props.residenceCoordinates.paloAlto.lng}
        text={'Palo Alto'}
      />
      <MapMarker
        lat={props.residenceCoordinates.montereyPark.lat}
        lng={props.residenceCoordinates.montereyPark.lng}
        text={'Monterey Park'}
      />
      <MapMarker
        lat={props.workCoordinates.atomRain.lat}
        lng={props.workCoordinates.atomRain.lng}
        text={'Atom Rain'}
      />
      <MapMarker
        lat={props.workCoordinates.wildebeest.lat}
        lng={props.workCoordinates.wildebeest.lng}
        text={'Wildebeest'}
      />
      <MapMarker
        lat={props.workCoordinates.sanguine.lat}
        lng={props.workCoordinates.sanguine.lng}
        text={'Sanguine Biosciences'}
      />
      </GoogleMapReact>
    </div>
  )
}

Map.propTypes = {
  center: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  workCoordinates: PropTypes.object.isRequired,
  residenceCoordinates: PropTypes.object.isRequired
}