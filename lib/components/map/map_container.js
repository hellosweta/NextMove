import { connect } from 'react-redux';
import { requestAllRestaurants } from '../../actions/restaurants_actions';
import { requestAllCrimes } from '../../actions/crimes_actions';
import { requestAllTransitData } from '../../actions/transit_actions';
import Map from './map';

const mapStateToProps = state =>({
  allRestaurants: state.allRestaurants,
  allCrimes: state.allCrimes,
  allTransit: state.allTransit.bartStops.concat(state.allTransit.sfmtaStops)
});

const mapDispatchToProps = dispatch =>({
  requestAllRestaurants: () => dispatch(requestAllRestaurants()),
  requestAllCrimes: () => dispatch(requestAllCrimes()),
  requestAllTransit: () => dispatch(requestAllTransitData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
