import React, {Component} from "react";
import {connect} from "react-redux";
import GoogleMapReact, {Marker} from 'google-map-react';

// import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
const AnyReactComponent = ({ text }) => <div>{text}</div>;


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
          bootstrapURLKeys={{ key: "AIzaSyBkCxcdQOwxQovx01IjtciRbvZtE-XKmV4" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

          <Marker
            name={'Dolores park'}
            position={{lat: 37.759703, lng: -122.428093}} />

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
