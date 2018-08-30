import { FETCH_RESTAURANT } from "../actions/index";
//convert rest names to sentence case
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RESTAURANT:
      return  {
        lat: action.payload.data.records[0].fields.geolocation[0],
        lng: action.payload.data.records[0].fields.geolocation[1],
        name: action.payload.data.parameters.refine.premise_name
      }
    default:
      return state;
  }
}

// console.log('returning FETCH_RESTAURANT with calue of', action);
