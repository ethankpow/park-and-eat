import axios from "axios";

const breakins_url = `https://opendurham.nc.gov/api/records/1.0/search/?dataset=durham-police-crime-reports&rows=5&facet=date_rept&facet=dow1&facet=reportedas&facet=chrgdesc&facet=big_zone&refine.reportedas=BREAK+IN+VEHICL&refine.chrgdesc=LARCENY+-+FROM+MOTOR+VEHICLE`;

export const FETCH_BREAKINS = "FETCH_BREAKINS";
export const FETCH_LOCATION = "FETCH_LOCATION";


export function fetchLocation(){
 const myLocation = {};

let request = new Promise( (resolve, reject) => {
  navigator.geolocation.getCurrentPosition(function(position) {
     resolve(position);
     })
  }
);
   return {
     type: FETCH_LOCATION,
     payload: request
   }
}

export function fetchBreakins(){
 const request = axios.get(breakins_url);

 return {
   type: FETCH_BREAKINS,
   payload: request
 };
}

// const request = navigator.geolocation.getCurrentPosition(
//   (position) => position
// );




















// https://opendurham.nc.gov/api/records/1.0/search/?dataset=restaurants-data&rows=3000&facet=id&facet=premise_name&facet=premise_city&facet=opening_date&facet=closing_date&facet=risk&facet=status&refine.premise_city=DURHAM&refine.premise_name=DOGSTAR+TATTOO

// import axios from "axios";
//
// const ROOT_URL = `https://opendurham.nc.gov/api/records/1.0/search/?dataset=restaurants-data&rows=3000&facet=id&facet=premise_name&facet=premise_city&facet=opening_date&facet=closing_date&facet=risk&facet=status&refine.premise_city=DURHAM&refine.premise_name=`;
//
// export const FETCH_RESTAURANT = "FETCH_RESTAURANT";
//
// export function fetchRestaurant(restaurant) {
//   const url = `${ROOT_URL}${restaurant}`;
//   const request = axios.get(url);
//
//   // console.log('Request', request)
//
//   return {
//     type: FETCH_RESTAURANT,
//     payload: request
//   };
// }
