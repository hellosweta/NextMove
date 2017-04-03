import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import LocationDetailContainer from './location_detail';
import CategoryDetailContainer from './category_detail';

const Root = ({ store }) =>{

  return (
    <Provider store= { store }>
      <Router history= { hashHistory }>
        <Route path='/' component={ App }>
          <Route path='/search' component={ LocationDetailContainer }>
            <Route path='/search/:category'
                   component={ CategoryDetailContainer } />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
