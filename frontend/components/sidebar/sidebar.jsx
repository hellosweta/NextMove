import React, { Component } from 'react';
// import { DragDropContextProvider } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
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
    return (
      <div className="sidebar-container">
        <Button
          className="sidebar-button"
          onClick={ () => this.setState({ open: !this.state.open }) }>
          <Glyphicon glyph="chevron-right" />
        </Button>
        <Panel
          collapsible
          expanded={ this.state.open }>
            <div className="drag-area-container">
              <CategoriesToCalc allowedDropEffect="move"
                       updateRank={this.props.updateRank} />
              <CategoriesToChoose allowedDropEffect="move"/>
            </div>
        </Panel>
      </div>
    );
  }
}
