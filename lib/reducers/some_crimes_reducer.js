import { RECEIVE_SOME_CRIMES } from '../actions/crimes_actions';

const SomeCrimesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SOME_CRIMES:
      return action.crimes;
    default:
      return state;
  }
};

export default SomeCrimesReducer;
