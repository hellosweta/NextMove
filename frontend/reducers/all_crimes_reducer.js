import { RECEIVE_ALL_CRIMES } from '../actions/crimes_actions';

const AllCrimesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CRIMES:
      return action.crimes;
    default:
      return state;
  }
};

export default AllCrimesReducer;
