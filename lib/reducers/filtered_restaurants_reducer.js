import {
  RECEIVE_SOME_RESTAURANTS
} from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const RestaurantsDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SOME_RESTAURANTS:
      const restaurants = action.restaurants;
      return merge({}, restaurants);
    default:
      return state;
  }
};

export default RestaurantsDetailReducer;
