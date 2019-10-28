import React from 'react'
import MapMarkerPNG from './map-marker.png'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './MapMarker.css'

export default function MapMarker(props) {
  const mapMarkerStyles = cx({
    mapMarker: true,
    hoveredMapMarker: props.$hover
  })
  return (
    <img className={mapMarkerStyles} src={MapMarkerPNG} alt={'Map Marker'} />
  )
}

MapMarker.propTypes = {
  // $hover comes from GoogleMapReact
  $hover: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
}