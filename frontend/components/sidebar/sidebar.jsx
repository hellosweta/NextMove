import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import CategoriesToCalcContainer from './categories_to_calc_container';
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
        return { width: 0 };
      }
    };

    return (
      <div className="sidebar-container">
        <Button
          className="sidebar-button"
          onClick={ () => this.setState({ open: !this.state.open }) }>
          <Glyphicon glyph={`chevron-${this.state.open ? 'right' : 'left'}`} />
        </Button>
        <div className="sidebar" style={ sidebarStyle() }>
          <div className="drag-area-container">
            <CategoriesToChoose
              allowedDropEffect="move"/>
            <CategoriesToCalc
              allowedDropEffect="move"
              updateRank={this.props.updateRank} />
            <div className="drag-area pin-instructions">
              <h1>Hint: You can click an area of interest for a more detailed breakdown!</h1>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
