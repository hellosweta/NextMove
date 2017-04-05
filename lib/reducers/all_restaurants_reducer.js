import { RECEIVE_SOME_RESTAURANTS } from '../actions/restaurants_actions';

const AllRestaurantsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SOME_RESTAURANTS:
      const newRests = action.restaurants.map(rest => ({
        lat: rest.location.latitude,
        lon: rest.location.longitude
      }));

      return state.concat(newRests);
    default:
      return state;
  }
};

export default AllRestaurantsReducer;
