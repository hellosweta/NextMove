import { RECEIVE_RANK } from '../actions/rank_actions';

const RankReducer = (state = [], action) =>{
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RANK:
      return action.rank;
    default:
      return state;
  }
}

export default RankReducer;
