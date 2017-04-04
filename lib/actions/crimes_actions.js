import * as CrimeAPIUtil from '../util/crime_api_util';

export const RECEIVE_ALL_CRIMES = "RECEIVE_ALL_CRIMES";
export const RECEIVE_SOME_CRIMES = "RECEIVE_SOME_CRIMES";

export const receiveAllCrimes = crimes => ({
  type: RECEIVE_ALL_CRIMES,
  crimes
});

export const receiveSomeCrimes = crimes => ({
  type: RECEIVE_SOME_CRIMES,
  crimes
});

export const requestAllCrimes = () => dispatch => (
  CrimeAPIUtil.fetchAllCrimes()
    .then(crimes => dispatch(receiveAllCrimes(crimes)))
);

export const requestSomeCrimes = (lat, lon, radiusInMiles) => dispatch => (
  CrimeAPIUtil.fetchSomeRestaurants(lat, lon, radiusInMiles)
    .then(crimes => dispatch(receiveSomeCrimes(crimes)))
);
