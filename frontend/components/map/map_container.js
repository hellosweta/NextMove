import { connect } from 'react-redux';
import Home from './home';
import { fetchAllCrimes } from '../../actions/listing_actions';

const mapStateToProps = ({ session, listings }, ownProps) => ({
  currentUser: session.currentUser,
  listings:  Object.keys(listings).map(id => listings[id]),
  region_id: ownProps.params.regionId
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
