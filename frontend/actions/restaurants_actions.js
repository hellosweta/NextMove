import * as YelpAPIUtil from '../util/yelp_api_util';
import * as RestaurantsAPIUtil from '../util/restaurants_api_util';

export const RECEIVE_SOME_RESTAURANTS = "RECEIVE_SOME_RESTAURANTS";
export const RECEIVE_SINGLE_RESTAURANT = "RECEIVE_SINGLE_RESTAURANT";
export const RECEIVE_FILTERED_RESTAURANTS = "RECEIVE_FILTERED_RESTAURANTS";

export const receiveSomeRestaurants = restaurants => ({
  type: RECEIVE_SOME_RESTAURANTS,
  restaurants
});

export const receiveSingleRestaurant = restaurant => ({
  type: RECEIVE_SINGLE_RESTAURANT,
  restaurant
});

export const receiveFilteredRestaurants = restaurants => ({
  type: RECEIVE_FILTERED_RESTAURANTS,
  restaurants
});

export const requestAllRestaurants = () => dispatch => {
  for (let i = 1; i < 6; i++) {
    RestaurantsAPIUtil.fetchSomeRestaurants(i * 1000)
      .then(restaurants => dispatch(receiveSomeRestaurants(restaurants)));
  }
};

export const requestFilteredRestaurants = (latitude, longitude, radiusInMiles=0.25, term="restaurants") => dispatch => (
  YelpAPIUtil.fetchFilteredYelpLocations(latitude, longitude, term, radiusInMiles)
    .then(restaurants => dispatch(receiveFilteredRestaurants(restaurants)))
);

export const requestSingleRestaurant = id => dispatch => (
  YelpAPIUtil.fetchSingleYelpLocation(id)
    .then(restaurant => dispatch(receiveSingleRestaurant(restaurant)))
);
