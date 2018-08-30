import React, { Component } from "react";
import { connect } from "react-redux";

class RestMap extends Component {
  constructor(){
    super()
    console.log(this)
  }

  componentDidMount(){
    //debugger;
  // let geo = L.map('mapid').setView([35.988611, -78.907222], 13);

  }


  render(){
    return (
      <div id="mapid">

      </div>

    );
  }
};

function mapStateToProps(state){
  console.log('rest map', state)
  return state
}

export default connect(mapStateToProps)(RestMap);
