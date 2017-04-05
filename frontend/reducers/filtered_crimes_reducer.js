import { RECEIVE_FILTERED_CRIMES } from '../actions/crimes_actions';

const FilteredCrimesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILTERED_CRIMES:
      return action.crimes;
    default:
      return state;
  }
};

export default FilteredCrimesReducer;
