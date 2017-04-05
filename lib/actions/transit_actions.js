import { bartStops } from '../../assets/data/bart_stops';
import { sfmtaStops } from '../../assets/data/sfmta_stops';

export const RECEIVE_ALL_TRANSIT_DATA = "RECEIVE_ALL_TRANSIT_DATA";
export const RECEIVE_BART_DATA = "RECEIVE_BART_DATA";
export const RECEIVE_SFMTA_DATA = "RECEIVE_SFMTA_DATA";

export const receiveBartData = (stops) => ({
  type: RECEIVE_BART_DATA,
  bartStops: stops
});

export const receiveSfmtaData = (stops) => ({
  type: RECEIVE_SFMTA_DATA,
  sfmtaStops: stops
});

export const receiveAllTransitData = (bart, sfmta) => ({
  type: RECEIVE_ALL_TRANSIT_DATA,
  bartStops: bart,
  sfmtaStops: sfmta
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
