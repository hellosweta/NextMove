import {
  RECEIVE_FILTERED_RESTAURANTS
} from '../actions/restaurants_actions';

const FilteredRestaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FILTERED_RESTAURANTS:
      return action.restaurants;
    default:
      return state;
  }
};

export default FilteredRestaurantsReducer;
