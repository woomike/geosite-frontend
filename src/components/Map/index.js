import React from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'

export default function Map(props) {
  return (
    <div style={{height: '90vh', width: '100%' }}>
      <GoogleMapReact
        onChildClick={props.handleMarkerClick}
        defaultCenter={props.defaultCenter}
        defaultZoom={props.defaultZoom}
        center={props.center}
      >
      <MapMarker
        lat={props.residenceCoordinates.westLosAngeles.lat}
        lng={props.residenceCoordinates.westLosAngeles.lng}
        text={'West Los Angeles'}
        locationKey={'WLA'}
      />
      <MapMarker
        lat={props.residenceCoordinates.paloAlto.lat}
        lng={props.residenceCoordinates.paloAlto.lng}
        text={'Palo Alto'}
        locationKey={'PA'}
      />
      <MapMarker
        lat={props.residenceCoordinates.montereyPark.lat}
        lng={props.residenceCoordinates.montereyPark.lng}
        text={'Monterey Park'}
        locationKey={'MPK'}
      />
      <MapMarker
        lat={props.workCoordinates.atomRain.lat}
        lng={props.workCoordinates.atomRain.lng}
        text={'Atom Rain'}
        locationKey={'ATOMRAIN'}
      />
      <MapMarker
        lat={props.workCoordinates.wildebeest.lat}
        lng={props.workCoordinates.wildebeest.lng}
        text={'Wildebeest'}
        locationKey={'WILDEBEEST'}
      />
      <MapMarker
        lat={props.workCoordinates.sanguine.lat}
        lng={props.workCoordinates.sanguine.lng}
        text={'Sanguine Biosciences'}
        locationKey={'SANGUINE'}
      />
      </GoogleMapReact>
    </div>
  )
}

Map.propTypes = {
  defaultCenter: PropTypes.object.isRequired,
  defaultZoom: PropTypes.number.isRequired,
  center: PropTypes.object,
  workCoordinates: PropTypes.object.isRequired,
  residenceCoordinates: PropTypes.object.isRequired,
  handleMarkerClick: PropTypes.func.isRequired
}