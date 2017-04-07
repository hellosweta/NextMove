import { connect } from 'react-redux';

import {requestFilteredCrimes} from '../../actions/crimes_actions';
import LocationDetail from './location_detail';


const mapStateToProps = state => ({
  filteredCrimes: state.filteredCrimes,
  filteredTransit: state.filteredTransit,
  filteredRestaurants: state.filteredRestaurants
});

export default connect(
  mapStateToProps,
  null
)(LocationDetail);
