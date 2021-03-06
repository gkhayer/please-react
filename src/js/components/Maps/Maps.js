import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';


export default class Maps extends Component {
  render() {
    const center = {
      lat: 38.7521,
      lng: 121.2880,
    };
    const GettingStartedGoogleMap = withGoogleMap(props => (
      <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={15}
      defaultCenter={center}
      onClick={props.onMapClick}
    >
      {props.markers && props.markers.map((marker, index) => (
        <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(index)}
        />
      ))}
    </GoogleMap>
    ));

    return (
      <GettingStartedGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
    />
    );
  }
}
