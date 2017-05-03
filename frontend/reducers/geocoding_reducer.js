import { RECEIVE_ADDRESS } from '../actions/geocoding_actions';

const GeocodingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ADDRESS:
      return action.address;
    default:
      return state;
  }
};

export default GeocodingReducer;
