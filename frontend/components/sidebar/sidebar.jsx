import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './dustbin';
import Box from './box';

export default class SideBar extends Component {
  // constructor(prosp){
  //   super(props)
  // }
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Dustbin />
          </div>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <Box name="Crime" />
            <Box name="Transit" />
            <Box name="Restaurant" />
          </div>
        </div>
      </DragDropContextProvider>
    );
  }
}
