import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestAllRestaurants } from './actions/restaurant_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.requestAllRestaurants = requestAllRestaurants;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
