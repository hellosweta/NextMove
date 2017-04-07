import React from 'react';
import { hashHistory } from 'react-router';
import LeafletMap from './map/map_container';

const App = ({children}) =>{
  return(
    <div className='app'>
      <nav className='header'>
        <h1 className='logo-pt-1'>Next</h1>
        <h1 className='logo-pt-2'>Move</h1>
        <h1 className='logo-pt-3'>SF</h1>
      </nav>
      <LeafletMap/>
      { children }
    </div>
  );
};

export default App;
