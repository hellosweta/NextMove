import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { Button, Panel, Glyphicon } from 'react-bootstrap';
import CategoriesToCalc from './categories_to_calc';
import CategoriesToChoose from './categories_to_choose';
import Box from './box';

export default class SideBar extends Component {
  constructor(props){
    super(props);
    this.state =({
      chooseBin: ['Crime', 'Transit', 'Restaurant'],
      calcBin: [],
      open: true
    });
  }

  render() {
    const sidebarStyle = () => {
      if (this.state.open) {
        return { width: 300 + 'px' };
      } else {
        return { width: 0, display: 'block' };
      }
    };

    // const sidebarStyle = { width: sidebarWidth() };


    return (
      <div className="sidebar-container">
        <Button
          className="sidebar-button"
          onClick={ () => this.setState({ open: !this.state.open }) }>
          <Glyphicon glyph="chevron-right" />
        </Button>
        <div className="sidebar" style={ sidebarStyle() }>
          <DragDropContextProvider backend={HTML5Backend}>
            <div className="drag-area-container">
              <CategoriesToCalc
                allowedDropEffect="move"
                updateRank={this.props.updateRank} />
              <CategoriesToChoose
                allowedDropEffect="move"/>
            </div>
          </DragDropContextProvider>
        </div>
      </div>
    );
  }
}
