import axios from "axios";

const ROOT_URL = `https://opendurham.nc.gov/api/records/1.0/search/?dataset=restaurants-data&rows=3000&facet=id&facet=premise_name&facet=premise_city&facet=opening_date&facet=closing_date&facet=risk&facet=status&refine.premise_city=DURHAM&refine.premise_name=`;

export const FETCH_RESTAURANT = "FETCH_RESTAURANT";

export function fetchRestaurant(restaurant) {
  const url = `${ROOT_URL}${restaurant}`;
  const request = axios.get(url);

  // console.log('Request', request)

  return {
    type: FETCH_RESTAURANT,
    payload: request
  };
}


// https://opendurham.nc.gov/api/records/1.0/search/?dataset=restaurants-data&rows=3000&facet=id&facet=premise_name&facet=premise_city&facet=opening_date&facet=closing_date&facet=risk&facet=status&refine.premise_city=DURHAM&refine.premise_name=DOGSTAR+TATTOO
