import {
  RECEIVE_BART_DATA,
  RECEIVE_SFMTA_DATA,
  RECEIVE_ALL_TRANSIT_DATA
} from '../actions/transit_actions';
import merge from 'lodash/merge';

const _nullTransit = Object.freeze({
  bartStops: [],
  sfmtaStops: []
});

const TransitReducer = (state = _nullTransit, action) => {
  Object.freeze(state);
  const sfmtaStops = action.sfmtaStops;
  const bartStops = action.bartStops;
  switch (action.type) {
    case RECEIVE_BART_DATA:
      return merge(state, _nullTransit, { bartStops });
    case RECEIVE_SFMTA_DATA:
      return merge(state, _nullTransit, { sfmtaStops });
    case RECEIVE_ALL_TRANSIT_DATA:
      return merge(state, {bartStops, sfmtaStops});
    default:
      return state;
  }
};

export default TransitReducer;
