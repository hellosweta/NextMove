import { connect } from 'react-redux';

import RestaurantDetail from './restaurant_detail';

const mapStateToProps = state =>({
  filteredRestaurants: state.filteredRestaurants
});


export default connect(
  mapStateToProps,
  null
)(RestaurantDetail);
