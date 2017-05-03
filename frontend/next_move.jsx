import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
const http = require('http');
import { requestAddress, receiveAddress } from './actions/geocoding_actions';

setInterval(() => {
  http.get("http://next-move-sf.herokuapp.com");
}, 900000);

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.requestAddress = requestAddress;
  window.receiveAddress = receiveAddress;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
