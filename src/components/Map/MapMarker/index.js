import React, { Component } from 'react'
import MapMarkerPNG from './map-marker.png'
import PropTypes from 'prop-types';

export default class MapMarker extends Component {
  render() {
    // $hover comes from GoogleMapReact
    const style = this.props.$hover ? {width: '35px', height: '35px'} : {width: '25px', height: '25px'}
    return (
      <img style={style} src={MapMarkerPNG} alt={'Map Marker'} />
    )
  }
}

React.propTypes = {
  $hover: PropTypes.bool
}