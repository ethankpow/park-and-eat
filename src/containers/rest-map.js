import React, {Component} from "react";
import {connect} from "react-redux";
// import {Map, Marker, Popup, TileLayer} from 'react-leaflet'


class RestMap extends Component {
  constructor() {
    super()

    console.log(this)
  }

  componentDidMount() {}

  // restaurantLocation() {
  //
  //
  // }

  render() {

    return(
      <div></div>
    )
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
  }
};

function mapStateToProps(state) {
  console.log('rest map', state)
  return state
}

export default connect(mapStateToProps)(RestMap);
