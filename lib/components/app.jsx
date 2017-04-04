import React from 'react';
import { hashHistory } from 'react-router';

const App = ({children}) =>{
  return(
    <div className='app'>
      this is app
    { children }
    </div>
  );
};

export default App;
