import { connect } from 'react-redux';

import {requestFilteredCrimes} from '../../actions/crimes_actions';
import LocationDetail from './location_detail';



const mapStateToProps = state => ({
  filteredCrimes: state.filteredCrimes,
  lat:        37.752242,
  long:     -122.417433,
  radius: .25
});

const mapDispatchToProps = dispatch => ({
  requestFilteredCrimes:  (lat, lon, radiusInMiles) =>
                dispatch(requestFilteredCrimes(lat, lon, radiusInMiles))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationDetail);
