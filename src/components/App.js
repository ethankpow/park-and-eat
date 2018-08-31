import React from "react";
import { Component } from "react";
import RestMap from  "../containers/rest-map.js"
import SearchBar from "../containers/search-bar";

// import WeatherList from "../containers/weather-list";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <RestMap />
      </div>
    );
  }
}
