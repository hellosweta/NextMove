import { combineReducers } from 'redux';

import AllRestaurantsReducer from './all_restaurants_reducer';
import FilteredRestaurantsReducer from './filtered_restaurants_reducer';
import AllCrimesReducer from './all_crimes_reducer';
import FilteredCrimesReducer from './filtered_crimes_reducer';

import AllTransitReducer from './all_transit_reducer';
import FilteredTransitReducer from './filtered_transit_reducer';
import RankReducer from './rank_reducer';

const RootReducer = combineReducers({
  allRestaurants: AllRestaurantsReducer,
  filteredRestaurants: FilteredRestaurantsReducer,
  allCrimes: AllCrimesReducer,
  filteredCrimes: FilteredCrimesReducer,

  allTransit: AllTransitReducer,
  filteredTransit: FilteredTransitReducer,
  rank: RankReducer
});

export default RootReducer;
