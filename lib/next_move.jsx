import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllCrimes, fetchSomeCrimes } from './util/crime_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchAllCrimes = fetchAllCrimes;
  window.fetchSomeCrimes = fetchSomeCrimes;
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
