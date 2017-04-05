import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestFilteredCrimes, requestAllCrimes } from './actions/crimes_actions';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.requestFilteredCrimes = requestFilteredCrimes;
  window.requestAllCrimes = requestAllCrimes;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
