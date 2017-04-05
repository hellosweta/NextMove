import {
  RECEIVE_FILTERED_RESTAURANTS
} from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const FilteredRestaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FILTERED_RESTAURANTS:
      const restaurants = action.restaurants;
      return merge({}, restaurants);
    default:
      return state;
  }
};

export default FilteredRestaurantsReducer;
