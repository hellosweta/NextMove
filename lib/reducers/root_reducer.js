import { combineReducers } from 'redux';

import RestaurantsReducer from './restaurants_reducer';
import RestaurantsDetailReducer from './restaurants_detail_reducer';
import AllCrimesReducer from './all_crimes_reducer';
import SomeCrimesReducer from './some_crimes_reducer';

const RootReducer = combineReducers({
  restaurants: RestaurantsReducer,
  restaurantsDetail: RestaurantsDetailReducer,
  allCrimes: AllCrimesReducer,
  someCrimes: SomeCrimesReducer
});

export default RootReducer;
