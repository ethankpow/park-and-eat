import React, {Component} from "react";
import {connect} from "react-redux";
import GoogleMapReact from 'google-map-react';

// import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
const Marker = ({ text }) => <div style={{
  color: 'white',
  background: 'grey',
  padding: '15px 10px',
  display: 'inline-flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  transform: 'translate(-50%, -50%)'
}}>{text}</div>;


class RestMap extends Component {
  static defaultProps = {
    center: {
      lat: 19.05,
      lng: 30.33
    },
    zoom: 11
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      // console.log(position.coords)
      // Get the coordinates of the current possition.
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      console.log(lat, lng)
})
  }

  // restaurantLocation() {
  //
  //
  // }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '75vh', width: '75%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB-w6uVNO3Cs4EMkSvEojoqeyHnTXOvbQU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

          <Marker
            name={'Dolores park'}
            position={{
              lat: this.lat,
              lng: this.lng,
              text:{"HI"}

            }} />

          </GoogleMapReact>
      </div>
    );
  }
};

function mapStateToProps(state) {
  console.log('rest map', state)
  return state
}

export default connect(mapStateToProps)(RestMap);








// const position = [51.505, -0.09]
// return (
//   <Map center={position} zoom={13}>
//     <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
//       <Marker position={position}>
//         <Popup>
//           A pretty CSS3 popup.
//           <br/>
//           Easily customizable.
//          </Popup>
//       </Marker>
//     </Map>
//   );
