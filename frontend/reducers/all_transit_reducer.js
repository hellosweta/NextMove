import {
  RECEIVE_TRANSIT_DATA
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
    case RECEIVE_TRANSIT_DATA:
      return merge({}, {bartStops, sfmtaStops});
    default:
      return state;
  }
};

export default TransitReducer;
