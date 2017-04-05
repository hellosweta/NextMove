import * as YelpAPIUtil from '../util/yelp_api_util';
import * as RestaurantsAPIUtil from '../util/restaurants_api_util';

export const RECEIVE_ALL_RESTAURANTS = "RECEIVE_ALL_RESTAURANTS";
export const RECEIVE_SINGLE_RESTAURANT = "RECEIVE_SINGLE_RESTAURANT";
export const RECEIVE_FILTERED_RESTAURANTS = "RECEIVE_FILTERED_RESTAURANTS";

export const receiveAllRestaurants = restaurants => ({
  type: RECEIVE_ALL_RESTAURANTS,
  restaurants
});

export const receiveRestaurant = restaurant => ({
  type: RECEIVE_SINGLE_RESTAURANT,
  restaurant
});

export const receiveFilteredRestaurants = restaurants => ({
  type: RECEIVE_FILTERED_RESTAURANTS,
  restaurants
});

export const requestAllRestaurants = () => dispatch => (
  RestaurantsAPIUtil.fetchAllRestaurants()
    .then(restaurants => dispatch(receiveAllRestaurants(restaurants)))
);

export const requestFilteredRestaurants = (term="restaurants", latitude, longitude, radiusInMiles=0.25, categories="") => dispatch => (
  YelpAPIUtil.fetchFilteredYelpLocations(term, latitude, longitude, radiusInMiles, categories)
    .then(restaurants => dispatch(receiveFilteredRestaurants(restaurants)))
);

export const requestSingleRestaurant = id => dispatch => (
  YelpAPIUtil.fetchSingleYelpLocation(id)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)))
);
