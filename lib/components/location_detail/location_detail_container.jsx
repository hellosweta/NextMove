import { connect } from 'react-redux';

import {requestFilteredCrimes} from '../../actions/crimes_actions';
import LocationDetail from './location_detail';


const mapStateToProps = state => ({
  filteredCrimes: state.filteredCrimes,
});

const mapDispatchToProps = dispatch => ({

  // requestFilteredCrimes:  (lat, lon, radiusInMiles) =>
  //               dispatch(requestFilteredCrimes(lat, lon, radiusInMiles))
});

export default connect(
  mapStateToProps,
  null
)(LocationDetail);
