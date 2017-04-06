import React from 'react';
import { hashHistory } from 'react-router';
import LeafletMap from './map/map_container';

const App = ({children}) =>{
  return(
    <div className='app'>
      <LeafletMap/>
      { children }
    </div>
  );
};

export default App;
