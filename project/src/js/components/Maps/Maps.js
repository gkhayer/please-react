// import React, {Component} from 'react';
// import PropTypes from 'prop-types';
// import { withGoogleMap, GoogleMap, Marker, withScriptjs } from 'react-google-maps';
// import './Maps.css';

// export default class Map extends Component {
//   render() {
//     const center = {
//       lat: 35.188664,
//       lng: -106.601568,
//     };

//     const GettingStartedGoogleMap = withGoogleMap(props => (
//       <GoogleMap
//         ref={props.onMapLoad}
//         defaultZoom={15}
//         defaultCenter={center}
//       >
//         <Marker position={center} />
//       </GoogleMap>
//     ));

//     return (
//       <GettingStartedGoogleMap
//         containerElement={
//           <div style={{ height: '100%' }} />
//         }
//         mapElement={
//           <div style={{ height: '100%' }} />
//         }
//       />
//     );
//   }
// }
