import { bartStops } from '../../assets/data/bart_stops';
import { sfmtaStops } from '../../assets/data/sfmta_stops';
import * as PlacesAPIUtil from '../util/places_api_util';

export const RECEIVE_TRANSIT_DATA = "RECEIVE_TRANSIT_DATA";
export const RECEIVE_FILTERED_TRANSIT_DATA = "RECEIVE_FILTERED_TRANSIT_DATA";

export const receiveBartData = (stops) => ({
  type: RECEIVE_TRANSIT_DATA,
  bartStops: stops,
  sfmtaStops: []
});

export const receiveSfmtaData = (stops) => ({
  type: RECEIVE_TRANSIT_DATA,
  sfmtaStops: stops,
  bartStops: []
});

export const receiveAllTransitData = (bart, sfmta) => ({
  type: RECEIVE_TRANSIT_DATA,
  bartStops: bart,
  sfmtaStops: sfmta
});

export const receiveFilteredTransitData = stops => ({
  type: RECEIVE_FILTERED_TRANSIT_DATA,
  stops
});

export const requestBartData = () => dispatch => (
  dispatch(receiveBartData(bartStops))
);

export const requestSfmtaData = () => dispatch => (
  dispatch(receiveSfmtaData(sfmtaStops))
);

export const requestAllTransitData = () => dispatch => (
  dispatch(receiveAllTransitData(bartStops, sfmtaStops))
);

export const requestFilteredTransitData = (lat, lon, radiusInMiles) => dispatch => (
  PlacesAPIUtil.fetchFilteredTransit(radiusInMiles, lat, lon)
    .then(stops => dispatch(receiveFilteredTransitData(stops)))
);
