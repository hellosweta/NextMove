import {
  RECEIVE_LOCATIONS,
  RECEIVE_LOCATION
} from '../actions/yelp_actions';
import merge from 'lodash/merge';

const LocationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LOCATIONS:
      const locations = action.locations;
      return merge({}, locations);
    case RECEIVE_LOCATION:
      let newState = {};
      newState[action.location.id]=action.location;
      return newState;
    default:
      return state;
  }
};

export default LocationsReducer;
