import { connect } from 'react-redux';
import { requestAllRestaurants } from '../../actions/restaurants_actions';
import { requestAllCrimes } from '../../actions/crimes_actions';
import Map from './map';

const mapStateToProps = state =>({
    allRestaurants: state.allRestaurants,
    allCrimes: state.allCrimes
});

const mapDispatchToProps = dispatch =>({
  requestAllRestaurants: () => dispatch(requestAllRestaurants()),
  requestAllCrimes: () => dispatch(requestAllCrimes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
