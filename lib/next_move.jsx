import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllCrimes, fetchSomeCrimes } from './util/crime_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchAllCrimes = fetchAllCrimes;
  window.fetchSomeCrimes = fetchSomeCrimes;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>I AM ENTRY</h1>, root);
});
