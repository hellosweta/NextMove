import {combineReducers} from 'redux';

import RestaurantsReducer from './restaurants_reducer';
import RestaurantsDetailReducer from './restaurants_detail_reducer';

const RootReducer = combineReducers({
  restaurants: RestaurantsReducer,
  restaurantsDetail: RestaurantsDetailReducer
});

export default RootReducer;
