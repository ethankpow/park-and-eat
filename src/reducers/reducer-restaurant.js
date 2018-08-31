import { FETCH_RESTAURANT, FETCH_BREAKINS } from "../actions/index";
//convert rest names to sentence case
let reducer = function(state = [], action) {
  switch (action.type) {
    case FETCH_RESTAURANT:
      console.log(action);
      return  {
        // lat: action.payload.data.records[0].fields.geolocation[0],
        // lng: action.payload.data.records[0].fields.geolocation[1],
        // name: action.payload.data.parameters.refine.premise_name
      }

    default:
      return state;
  }
}

export default reducer;
// console.log('returning FETCH_RESTAURANT with calue of', action);
