import { combineReducers } from 'redux';

import RestaurantsReducer from './restaurants_reducer';
import FilteredRestaurants from './filtered_restaurants_reducer';
import AllCrimesReducer from './all_crimes_reducer';
import SomeCrimesReducer from './some_crimes_reducer';

const RootReducer = combineReducers({
  allRestaurants: RestaurantsReducer,
  filteredRestaurants: FilteredRestaurants,
  allCrimes: AllCrimesReducer,
  filteredCrimes: SomeCrimesReducer
});

export default RootReducer;
