import * as YelpAPIUtil from '../util/yelp_api_util';

export const RECEIVE_LOCATIONS = "RECEIVE_LOCATIONS";
export const RECEIVE_LOCATION = "RECEIVE_LOCATION";

export const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations
});

export const receiveLocation = location => ({
  type: RECEIVE_LOCATION,
  location
});

export const fetchYelpLocations = (term, location, radius, categories="") => dispatch => (
  YelpAPIUtil.fetchYelpLocations(term, location, radius, categories)
    .then(locations => dispatch(receiveLocations(locations)))
);

export const fetchSingleYelpLocation = id => dispatch => (
  YelpAPIUtil.fetchSingleYelpLocation(id)
    .then(location => dispatch(receiveLocation(location)))
);
