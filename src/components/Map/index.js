import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 34.05,
      lng: -118.24
    },
    zoom: 11
  };

          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
  render() {
    return (
      <div style={{height: '500px', width: '500px' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;