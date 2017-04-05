import * as CrimeAPIUtil from '../util/crimes_api_util';

export const RECEIVE_SOME_CRIMES = "RECEIVE_SOME_CRIMES";
export const RECEIVE_FILTERED_CRIMES = "RECEIVE_FILTERED_CRIMES";

export const receiveSomeCrimes = crimes => ({
  type: RECEIVE_SOME_CRIMES,
  crimes
});

export const receiveFilteredCrimes = crimes => ({
  type: RECEIVE_FILTERED_CRIMES,
  crimes
});

export const requestAllCrimes = () => dispatch => {
  for (let i = 1; i < 6; i++) {
    CrimeAPIUtil.fetchSomeCrimes(i * 1000)
      .then(crimes => dispatch(receiveSomeCrimes(crimes)));
  }
};

export const requestFilteredCrimes = (lat, lon, radiusInMiles=0.25) => dispatch => (
  CrimeAPIUtil.fetchFilteredCrimes(lat, lon, radiusInMiles)
    .then(crimes => dispatch(receiveFilteredCrimes(crimes)))
);
