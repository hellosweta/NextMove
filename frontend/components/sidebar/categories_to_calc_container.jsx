import { connect } from 'react-redux';
import { updateRank } from '../../actions/rank_actions';
import CategoriesToCalc from './categories_to_calc';

const mapDispatchToProps = dispatch =>({
  updateRank: rank => dispatch(updateRank(rank))
});

export default connect(
  null,
  mapDispatchToProps
)(CategoriesToCalc);
