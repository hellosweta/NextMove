import * as YelpAPIUtil from '../util/yelp_api_util';

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const RECEIVE_SOME_RESTAURANTS = "RECEIVE_SOME_RESTAURANTS";

export const receiveRestaurants = resta => ({
  type: RECEIVE_RESTAURANTS,
  resta
});

export const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const receiveSomeRestaurants = restaurants => ({
  type: RECEIVE_SOME_RESTAURANTS,
  restaurants
});

export const fetchRestaurants = (term="restaurants", location, categories="") => dispatch => (
  YelpAPIUtil.fetchYelpLocations(term, location, categories)
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
);

export const fetchSomeRestaurants = (term="restaurants", latitude, longitude, radius, categories="") => dispatch => (
  YelpAPIUtil.fetchSomeRestaurants(term, latitude, longitude, radius, categories)
    .then(restaurants => dispatch(receiveSomeRestaurants))
);

export const fetchSingleRestaurant = id => dispatch => (
  YelpAPIUtil.fetchSingleYelpLocation(id)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)))
);
