import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
// import LocationDetailContainer from './location_detail/location_detail';
// import TransitDetailContainer from './transit_detail';
// import CrimeDetailContainer from './crime_detail';
// import RestaurantDetailContainer from './restaurant_detail';

const Root = () =>{

  return (
    <Provider>
      <Router history= { hashHistory }>
        <Route path='/' component={ App }></Route>
      </Router>
    </Provider>
  );
};

export default Root;

// <Route path='/search' component={ LocationDetailContainer }>
//   <Route path='/search/crime'
//     component={ CrimeDetailContainer } />
//   <Route path='/search/transit'
//      component={ TransitDetailContainer } />
//   <Route path='/search/restaurant'
//     component={ RestaurantDetailContainer } />
// </Route>
