import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRestaurant } from "../actions/index";
import RestMap from './rest-map';
import SimpleMap from './test-map.js'



class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
     event.preventDefault();
     var preChangeTerm = this.state.term
     // this changes any lower case or sentence case text in the input to upper case separated by '+'
     var changedString = preChangeTerm.toUpperCase().replace(/ /g , "+")
     // fetch restaurant data
     this.props.fetchRestaurant(changedString);
     this.setState({ term: "" });
   }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Search for a restaurant"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>


        </form>
          <div className="container">
            <RestMap />
            <div className="row">
              <button type="submit" className="btn btn-primary">Are you safe?</button>
            </div>
          </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRestaurant }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
