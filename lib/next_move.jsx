import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllCrimes } from './util/crime_api_util';

// window.fetchAllCrimes = fetchAllCrimes;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>I AM ENTRY</h1>, root);
});
