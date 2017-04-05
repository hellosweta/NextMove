import { connect } from 'react-redux';
import { requestAllRestaurants } from '../../actions/restaurant_actions';
import Map from './map';

const mapStateToProps = state =>({
    allRestaurants: state.allRestaurants
});

const mapDispatchToProps = dispatch =>({
  requestAllRestaurants: () => dispatch(requestAllRestaurants())
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
