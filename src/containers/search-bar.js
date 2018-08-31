import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchBreakins, fetchLocation} from "../actions/index";
import GoogleMapReact from 'google-map-react';

const Marker = ({text}) => <div style={{
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

class SearchBar extends Component {


  constructor(props) {
    super(props);

    this.state = {
      term: "",
      location: "",
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 13
    };

    this.getLocation = this.getLocation.bind(this);
  }

  componentDidUpdate() {
    // console.log(this.props.center);

  }
  getLocation(event) {
    console.log("location getter clicked")
    this.props.fetchLocation()
  }
// componentWillMount(){
//   var d = new Date(this.props.time);
//   console.log(this.time)
//   var hours = d.getHours(),
//     minutes = d.getMinutes(),
//     seconds = d.getSeconds(),
//     month = d.getMonth() + 1,
//     day = d.getDate(),
//     year = d.getFullYear() % 100;
//
//   function pad(d) {
//     return (
//       d < 10
//       ? "0"
//       : "") + d;
//   }
//
//   var formattedDate = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + " " + pad(month) + "-" + pad(day) + "-" + pad(year);
//
//   console.log(formattedDate);
// }
  render() {
    console.log(this.props.location)
    debugger


    return (<div>
      <div className="location-search-btn">
        <button type="button" onClick={this.getLocation}>My Loc</button>
      </div>
      <div style={{
          height: '75vh',
          width: '75%'
        }}>
        <GoogleMapReact bootstrapURLKeys={{
            key: "AIzaSyB-w6uVNO3Cs4EMkSvEojoqeyHnTXOvbQU"
          }} defaultCenter={this.props.location.center} defaultZoom={13}>



        </GoogleMapReact>
      </div>
    </div>);
  }
}
function mapStateToProps(state) {
  console.log('Search Bar', state)
  return {location: state.breakins};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBreakins,
    fetchLocation
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { fetchRestaurant } from "../actions/index";
// import RestMap from './rest-map';
// import SimpleMap from './test-map.js'
//
//
//
// class SearchBar extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = { term: "" };
//
//     this.onInputChange = this.onInputChange.bind(this);
//     this.onFormSubmit = this.onFormSubmit.bind(this);
//   }
//
//   onInputChange(event) {
//     this.setState({ term: event.target.value });
//   }
//
//   onFormSubmit(event) {
//      event.preventDefault();
//      var preChangeTerm = this.state.term
//       this changes any lower case or sentence case text in the input to upper case separated by '+'
//      var changedString = preChangeTerm.toUpperCase().replace(/ /g , "+")
//       fetch restaurant data
//      this.props.fetchRestaurant(changedString);
//      this.setState({ term: "" });
//    }
//
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.onFormSubmit} className="input-group">
//           <input
//             placeholder="Search for a restaurant"
//             className="form-control"
//             value={this.state.term}
//             onChange={this.onInputChange}
//           />
//           <span className="input-group-btn">
//             <button type="submit" className="btn btn-secondary">Submit</button>
//           </span>
//
//
//         </form>
//           <div className="container">
//             <RestMap />
//             <div className="row">
//               <button type="submit" className="btn btn-primary">Are you safe?</button>
//             </div>
//           </div>
//       </div>
//     );
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchRestaurant }, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(SearchBar);
