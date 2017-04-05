import { RECEIVE_SOME_RESTAURANTS } from '../actions/restaurant_actions';
import { merge } from 'lodash';

const AllRestaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SOME_RESTAURANTS:
      return action.restaurants.map(rest => ({
        lat: rest.location.latitude,
        lon: rest.location.longitude
      }));
    default:
      return state;
  }
};

export default AllRestaurantsReducer;
