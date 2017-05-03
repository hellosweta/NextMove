import * as GeocodingAPIUtil from '../util/geocoding_api_util';

export const RECEIVE_ADDRESS = "RECEIVE_ADDRESS";

export const receiveAddress = placeData => ({
  type: RECEIVE_ADDRESS,
  placeData
});

export const requestAddress = (lat, lon) => dispatch => (
  GeocodingAPIUtil.fetchAddress(lat, lon)
    .then(placeData => dispatch(receiveAddress(placeData)))
);
