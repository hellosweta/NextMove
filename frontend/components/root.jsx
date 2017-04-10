import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import LocationDetailContainer from
                      './location_detail/location_detail_container';
import TransitDetailContainer from
                      './transit_detail/transit_detail_container';
import CrimeDetailContainer from
                      './crime_detail/crime_detail_container';
import RestaurantDetailContainer from
                      './restaurant_detail/restaurant_detail_container';

const Root = ({ store }) =>{

  return (
    <Provider store= { store }>
      <Router history= { hashHistory }>
        <Route path='/' component={ App }>
          <Route path='/search' component={ LocationDetailContainer }>
            <div className='BarChart'>
              <Route path='/search/crime'
                component={ CrimeDetailContainer } />
              <Route path='/search/transit'
                component={ TransitDetailContainer } />
              <Route path='/search/restaurant'
                component={ RestaurantDetailContainer } />
            </div>
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
