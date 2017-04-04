import {combineReducers} from 'redux';

import RestaurantsReducer from './restaurants_reducer';

const RootReducer = combineReducers({
  restaurants: RestaurantsReducer
});

export default RootReducer;
