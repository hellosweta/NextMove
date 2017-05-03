import { connect } from 'react-redux';
import LocationDetail from './location_detail';

const mapStateToProps = state => ({
  filteredCrimes: state.filteredCrimes,
  filteredTransit: state.filteredTransit,
  filteredRestaurants: state.filteredRestaurants,
  address: state.address
});

export default connect(
  mapStateToProps,
  null
)(LocationDetail);
