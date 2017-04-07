import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CategoriesToCalc from './categories_to_calc';
import CategoriesToChoose from './categories_to_choose';
import Box from './box';

export default class SideBar extends Component {
  constructor(props){
    super(props)
    this.state =({
      chooseBin: ['Crime', 'Transit', 'Restaurant'],
      calcBin: []
    })
  }

  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div>
          <div style={{ overflow: 'hidden', clear: 'both' }}>
            <CategoriesToCalc allowedDropEffect="move"
                     updateRank={this.props.updateRank} />
            <CategoriesToChoose allowedDropEffect="move"/>
          </div>
          <div style={{ overflow: 'hidden', clear: 'both' }}>

          </div>
        </div>
      </DragDropContextProvider>
    );
  }
}
