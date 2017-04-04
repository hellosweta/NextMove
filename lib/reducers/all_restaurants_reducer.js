import {
  RECEIVE_ALL_RESTAURANTS,
  RECEIVE_SINGLE_RESTAURANTS
} from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const AllRestaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_RESTAURANTS:
      const restaurants = action.restaurants;
      return merge({}, restaurants);
    case RECEIVE_SINGLE_RESTAURANTS:
      let newState = {};
      newState[action.restaurant.id]=action.restaurant;
      return newState;
    default:
      return state;
  }
};

export default AllRestaurantsReducer;
