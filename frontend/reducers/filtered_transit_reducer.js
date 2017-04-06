import { RECEIVE_FILTERED_TRANSIT_DATA } from '../actions/transit_actions';

const FilteredTransitReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILTERED_TRANSIT_DATA:
      const stops = action.stops.map(stop => {
        let type;
        if (stop.types.includes("light_rail_station")) { type = "Muni"; }
        else if (stop.types.includes("subway_station")) { type = "BART"; }
        else if (stop.types.includes("train_station")) { type = "Train Station"; }
        else { type = "Bus Stop"; }
        return { type, name: stop.name };
      });
      return stops;
    default:
      return state;
  }
};

export default FilteredTransitReducer;
