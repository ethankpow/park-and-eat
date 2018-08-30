import { FETCH_RESTAURANT } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RESTAURANT:
    console.log('returning FETCH_RESTAURANT')
  }
  return state;
}
