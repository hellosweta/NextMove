import { combineReducers } from 'redux';

import RestaurantsReducer from './restaurants_reducer';
import RestaurantsDetailReducer from './restaurants_detail_reducer';
import AllCrimesReducer from './all_crimes_reducer';
import SomeCrimesReducer from './some_crimes_reducer';

const RootReducer = combineReducers({
  allRestaurants: RestaurantsReducer,
  filteredRestaurants: RestaurantsDetailReducer,
  allCrimes: AllCrimesReducer,
  filteredCrimes: SomeCrimesReducer
});

export default RootReducer;
