import {
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT
} from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const RestaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      const restaurants = action.restaurants;
      return merge({}, restaurants);
    case RECEIVE_RESTAURANT:
      let newState = {};
      newState[action.restaurant.id]=action.restaurant;
      return newState;
    default:
      return state;
  }
};

export default RestaurantsReducer;
