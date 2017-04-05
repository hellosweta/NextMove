import { combineReducers } from 'redux';

import AllRestaurantsReducer from './all_restaurants_reducer';
import FilteredRestaurantsReducer from './filtered_restaurants_reducer';
import AllCrimesReducer from './all_crimes_reducer';
import FilteredCrimesReducer from './filtered_crimes_reducer';
import TransitReducer from './transit_reducer';

const RootReducer = combineReducers({
  allRestaurants: AllRestaurantsReducer,
  filteredRestaurants: FilteredRestaurantsReducer,
  allCrimes: AllCrimesReducer,
  filteredCrimes: FilteredCrimesReducer,
  transit: TransitReducer
});

export default RootReducer;
