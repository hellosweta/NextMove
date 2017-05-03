import { RECEIVE_ADDRESS } from '../actions/geocoding_actions';

const GeocodingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ADDRESS:
      if (action.placeData.features[0].place_name) {
        return action.placeData.features[0].place_name;
      } else {
        return "San Francisco";
      }
    default:
      return state;
  }
};

export default GeocodingReducer;
