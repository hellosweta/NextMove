import { connect } from 'react-redux';

import CrimeDetail from './crime_detail';

const mapStateToProps = state =>({
  filteredCrimes: state.filteredCrimes
});


export default connect(
  mapStateToProps,
  null
)(CrimeDetail);
