import React, { Component } from 'react'
import MapMarkerPNG from './map-marker.png'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './MapMarker.css'

export default class MapMarker extends Component {
  render() {
    const mapMarkerStyles = cx({
      mapMarker: true,
      hoveredMapMarker: this.props.$hover
    })
    return (
      <img className={mapMarkerStyles} src={MapMarkerPNG} alt={'Map Marker'} />
    )
}
}

React.propTypes = {
  // $hover comes from GoogleMapReact
  $hover: PropTypes.bool
}