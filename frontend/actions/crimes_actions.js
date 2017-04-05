import * as CrimeAPIUtil from '../util/crime_api_util';

export const RECEIVE_ALL_CRIMES = "RECEIVE_ALL_CRIMES";
export const RECEIVE_FILTERED_CRIMES = "RECEIVE_FILTERED_CRIMES";

export const receiveAllCrimes = crimes => ({
  type: RECEIVE_ALL_CRIMES,
  crimes
});

export const receiveFilteredCrimes = crimes => ({
  type: RECEIVE_FILTERED_CRIMES,
  crimes
});

export const requestAllCrimes = () => dispatch => (
  CrimeAPIUtil.fetchAllCrimes()
    .then(crimes => dispatch(receiveAllCrimes(crimes)))
);

export const requestFilteredCrimes = (lat, lon, radiusInMiles=0.25) => dispatch => (
  CrimeAPIUtil.fetchFilteredCrimes(lat, lon, radiusInMiles)
    .then(crimes => dispatch(receiveFilteredCrimes(crimes)))
);
