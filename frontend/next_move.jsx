import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {
  requestBartData, requestSfmtaData, requestAllTransitData
} from './actions/transit_actions';
import { requestAllCrimes } from './actions/crimes_actions';
import { fetchPlaces } from './util/places_api_util';
import { requestFilteredTransitData } from './actions/transit_actions';


window.requestFilteredTransitData = requestFilteredTransitData;
window.requestAllCrimes = requestAllCrimes;
window.fetchPlaces = fetchPlaces;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.requestBartData = requestBartData;
  window.requestSfmtaData = requestSfmtaData;
  window.requestAllTransitData = requestAllTransitData;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
