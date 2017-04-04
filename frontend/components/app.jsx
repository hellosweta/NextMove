import React from 'react';
import { hashHistory } from 'react-router';
import Map from './map/map';

const App = ({children}) => {
  return(
    <div className='app'>
      debugger;
      <Map/>
      {children}
    </div>
  );
};

export default App;
