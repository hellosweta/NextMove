import React from 'react';
import { hashHistory } from 'react-router';
import LeafletMap from './map/map';

const App = ({children}) =>{
  return(
    <div className='app'>
      <LeafletMap/>
    </div>
  );
};

export default App;
