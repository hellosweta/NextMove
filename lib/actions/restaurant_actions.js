import * as YelpAPIUtil from '../util/yelp_api_util';

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";

export const receiveRestaurants = locations => ({
  type: RECEIVE_RESTAURANTS,
  locations
});

export const receiveRestaurant = location => ({
  type: RECEIVE_RESTAURANT,
  location
});

export const fetchRestaurants = (term="restaurants", location, radius, categories="") => dispatch => (
  YelpAPIUtil.fetchYelpLocations(term, location, radius, categories)
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
);

export const fetchSingleRestaurant = id => dispatch => (
  YelpAPIUtil.fetchSingleYelpLocation(id)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)))
);
