import * as GeocodingAPIUtil from '../util/geocoding_api_util';

export const RECEIVE_ADDRESS = "RECEIVE_ADDRESS";

export const receiveAddress = address => ({
  type: RECEIVE_ADDRESS,
  address
});

export const requestAddress = (lat, lon) => dispatch => (
  GeocodingAPIUtil.fetchAddress(lat, lon)
    .then(address => dispatch(receiveAddress(address)))
);
