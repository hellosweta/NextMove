import { connect } from 'react-redux';
import { requestAllRestaurants, requestFilteredRestaurants } from '../../actions/restaurants_actions';
import { requestAllCrimes, requestFilteredCrimes } from '../../actions/crimes_actions';
import { requestAllTransitData, requestFilteredTransitData } from '../../actions/transit_actions';
import Map from './map';

const mapStateToProps = state =>({
  allRestaurants: state.allRestaurants,
  allCrimes: state.allCrimes,
  allTransit: state.allTransit.bartStops.concat(state.allTransit.sfmtaStops)
});

const mapDispatchToProps = dispatch =>({
  requestAllRestaurants: () => dispatch(requestAllRestaurants()),
  requestAllCrimes: () => dispatch(requestAllCrimes()),
  requestAllTransit: () => dispatch(requestAllTransitData()),

  requestFilteredCrimes: (lat, lon, radius) =>
    dispatch(requestFilteredCrimes(lat, lon, radius)),
  requestFilteredTransitData: (lat, lon, radius) =>
                 dispatch(requestFilteredTransitData(lat, lon, radius)),
  requestFilteredRestaurants: (lat, lon, radius) =>
                 dispatch(requestFilteredRestaurants(lat, lon, radius)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
