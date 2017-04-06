import { RECEIVE_SOME_CRIMES } from '../actions/crimes_actions';

const AllCrimesReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SOME_CRIMES:
      return state.concat(action.crimes);
    default:
      return state;
  }
};

export default AllCrimesReducer;
