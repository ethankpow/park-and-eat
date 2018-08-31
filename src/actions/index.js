import axios from "axios";

const ROOT_URL = `https://opendurham.nc.gov/api/records/1.0/search/?dataset=restaurants-data&rows=3000&facet=id&facet=premise_name&facet=premise_city&facet=opening_date&facet=closing_date&facet=risk&facet=status&refine.premise_city=DURHAM&refine.premise_name=`;
const breakins_url = `https://opendurham.nc.gov/api/records/1.0/search/?dataset=durham-police-crime-reports&rows=5&facet=date_rept&facet=dow1&facet=reportedas&facet=chrgdesc&facet=big_zone&refine.reportedas=BREAK+IN+VEHICL&refine.chrgdesc=LARCENY+-+FROM+MOTOR+VEHICLE`;

export const FETCH_RESTAURANT = "FETCH_RESTAURANT";
export const FETCH_BREAKINS = "FETCH_BREAKINS";

export function fetchRestaurant(restaurant) {
  const url = `${ROOT_URL}${restaurant}`;
  const getBreakins = (response) => {
    let lat = response.data.records[0].fields.geolocation[0];
    let lng = response.data.records[0].fields.geolocation[1];
    let name = response.data.parameters.refine.premise_name;

    axios.get(breakins_url).then( (durhamData) => {
        console.log('datafromdurham', durhamData);
        // console.log(lat,lng,name);

      var theLatLongs = {
        lat: ,
        long: ,
        date: ,
        hour:
      };

// example of mapping latitude
      // durhamData.data.records.map( record => {
      //   return {
      //     record.geometry.coordinates[1]
      //   }
      // })


        for (var i = 0; i < durhamData.data.records.length; i++) {
          theLatLongs.lat.push(durhamData.data.records[i].geometry.coordinates[1])
          theLatLongs.long.push(durhamData.data.records[i].geometry.coordinates[0])
          theLatLongs.date.push(durhamData.data.records[i].fields.date_occu)
          theLatLongs.hour.push(durhamData.data.records[i].fields.hour_occu)
        }
      console.log(theLatLongs)
    })
  }

  const request = axios.get(url).then(getBreakins)

  console.log('Request', request)

  return {
    type: FETCH_RESTAURANT,
    payload: request
  };
}
//
// export function fetchBreakins(lat,lon){
//   const breakins = axios.get(breakins_url);
//
//   return {
//     type: FETCH_BREAKINS,
//     payload: request
//   };
// }

// axios.get(...)
//   .then((response) => {
//     return axios.get(...); // using response.data
//   })
//   .then((response) => {
//     console.log('Response', response);
//   });

// export function getBreakins(restaurant) {
//   const url = `https://opendurham.nc.gov/api/records/1.0/search/?dataset=durham-police-crime-reports&rows=5&facet=date_rept&facet=dow1&facet=reportedas&facet=chrgdesc&facet=big_zone&refine.reportedas=BREAK+IN+VEHICL&refine.chrgdesc=LARCENY+-+FROM+MOTOR+VEHICLE`;
//   const request = axios.get(url);
//
//   // console.log('Request', request)
//
//   return {
//     type: FETCH_BREAKINS,
//     payload: request
//   };
// }


// https://opendurham.nc.gov/api/records/1.0/search/?dataset=restaurants-data&rows=3000&facet=id&facet=premise_name&facet=premise_city&facet=opening_date&facet=closing_date&facet=risk&facet=status&refine.premise_city=DURHAM&refine.premise_name=DOGSTAR+TATTOO
