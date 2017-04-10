import React from 'react';
import { hashHistory } from 'react-router';
import LeafletMap from './map/map_container';

const App = ({children}) =>{
  return(
    <div className='app'>
      <nav className='header'>
        <div>
          <img className="logo" src="https://image.flaticon.com/icons/svg/188/188467.svg"></img>
        </div>
        <div>
          <div className="full-title">

            <h1 className="title">NextMove    <h1 className="title-SF">SF</h1></h1>

          </div>
          <h4 className="tagline">Visualize Your Next Home</h4>
        </div>
      </nav>
      <LeafletMap/>
      { children }
    </div>
  );
};

export default App;
