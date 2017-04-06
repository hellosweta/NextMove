import {RECEIVE_RANK} from '../actions/rank_actions';

const Rank = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RANK:
      return action.rank
      break;
    default:
    return state;
  }
};

export default Rank;
