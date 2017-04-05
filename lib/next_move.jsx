import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllCrimes, fetchSomeCrimes } from './util/crime_api_util';
import {
fetchAllRestaurants,
fetchFilteredRestaurants,
fetchSingleRestaurant
} from './actions/restaurant_actions';
import { fetchAllYelpLocations } from './util/yelp_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchAllCrimes = fetchAllCrimes;
  window.fetchSomeCrimes = fetchSomeCrimes;
  window.fetchAllRestaurants = fetchAllRestaurants;
  window.fetchFilteredRestaurants = fetchFilteredRestaurants;
  window.fetchSingleRestaurant = fetchSingleRestaurant;
  window.fetchAllYelpLocations = fetchAllYelpLocations;
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
