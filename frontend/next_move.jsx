import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
const http = require('http');
import { fetchAddress } from './util/geocoding_api_util';

setInterval(() => {
  http.get("http://next-move-sf.herokuapp.com");
}, 900000);

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.fetchAddress = fetchAddress;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
