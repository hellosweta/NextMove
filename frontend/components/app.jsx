import React from 'react';
import { hashHistory } from 'react-router';
import LeafletMap from './map/map_container';

const App = ({children}) =>{
  return(
    <div className='app'>
      <nav className='header'>
        <h1 className='logo'>NextMoveSF</h1>
      </nav>
      <LeafletMap/>
      { children }
    </div>
  );
};

export default App;
