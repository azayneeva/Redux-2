import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //concat returns a new array that contains the initial array + the new one, with react as well as with redux we must not change state directly (in this case we must not use state.push([action.payload.data])) as push changes the initial state
      // return state.concat([action.payload.data]);
      //but better is to use es6 syntax:
      return [action.payload.data, ...state];
  }
  return state;
}
