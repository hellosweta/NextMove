import { connect } from 'react-redux';

import TransitDetail from './transit_detail';

const mapStateToProps = state =>({
  filteredTransit: state.filteredTransit
});

export default connect(
  mapStateToProps,
  null
)(TransitDetail);
