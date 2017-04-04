import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestAllCrimes, requestFilteredCrimes } from './actions/crimes_actions';

window.requestAllCrimes = requestAllCrimes;
window.requestFilteredCrimes = requestFilteredCrimes;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
