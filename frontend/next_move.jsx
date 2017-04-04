import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
// import { fetchAllCrimes } from './util/crime_api_util';

// window.fetchAllCrimes = fetchAllCrimes;

document.addEventListener('DOMContentLoaded', () => {
  const map = document.getElementById('map-container');
  ReactDOM.render(<Root/>, map);
});
