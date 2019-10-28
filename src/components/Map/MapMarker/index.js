import React from 'react'
import MapMarkerPNG from './map-marker.png'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './MapMarker.css'

export default function MapMarker(props) {
  const mapMarkerImgStyles = cx({
    mapMarkerImg: true,
    mapMarkerImgHovered: props.$hover
  })
  return (
    <div className={'mapMarker'}>
      <img
        className={mapMarkerImgStyles}
        src={MapMarkerPNG}
        alt={props.text} />
      <p>{props.text}</p>
    </div>
  )
}

MapMarker.propTypes = {
  // $hover comes from GoogleMapReact
  $hover: PropTypes.bool,
  text: PropTypes.string
}