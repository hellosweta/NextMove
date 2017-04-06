import { connect } from 'react-redux';

import {updateRank} from '../../actions/rank_actions';

import Sidebar from './sidebar';

const mapDispatchToProps = dispatch =>({
  updateRank: rank => dispatch(updateRank(rank))
});

export default connect(
  null,
  mapDispatchToProps
)(Sidebar);
