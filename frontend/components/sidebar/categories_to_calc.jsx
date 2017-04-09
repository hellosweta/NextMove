import React, { PropTypes, Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';
import { Button } from 'react-bootstrap';
import ItemTypes from './item_types';
import merge from 'lodash.merge';
import Box from './box';

const boxTarget = {
  drop(props, monitor, component) {
    let sourceId = monitor.internalMonitor.registry.pinnedSourceId;
    let source = monitor.internalMonitor.registry.handlers[sourceId];
    let CalcStateRank = component.state.rank;
    if (CalcStateRank.length == 2 && source.component.props.addToChooseRank){
      // add the leading category from the calc bin to the choose bin
      source.component.props.addToChooseRank(CalcStateRank[1]);
    }

    // this where we add the box
    component.addToRank(monitor.getItem().name);


    // below is where we check if the boxes need to be shuffled

    // don't shuffle if the source of the box is choose Dustbin
    if (source.component.props.iCameFrom === 'choose Dustbin') return;
    const dragitem = monitor.getItem().name;
    const hoverIndex = component.state.rank.indexOf(dragitem);

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the item it at index 0
    // When dragging upwards,  only move when the item it at index 1
    //

    if (hoverIndex === -1 ) return {
                                name: `calc Dustbin`,
                                allowedDropEffect: props.allowedDropEffect,
                              };
    // Dragging downwards
    if ( hoverIndex === 1 && hoverClientY < 0) {
      return {
        name: `calc Dustbin`,
        allowedDropEffect: props.allowedDropEffect,
      };
    }

    // Dragging upwards
    if (hoverIndex === 0 && hoverClientY > hoverMiddleY * 2) {
      return {
        name: `calc Dustbin`,
        allowedDropEffect: props.allowedDropEffect,
      };
    }


    // Time to actually perform the action
    component.moveBox(dragitem, hoverIndex);

    return {
      name: `calc Dustbin`,
      allowedDropEffect: props.allowedDropEffect,
    };
  },
};

class Dustbin extends Component {
  constructor(props){
    super(props)
    this.state={ rank: []}
    this.removeRank = this.removeRank.bind(this);
    this.sendRankUpdate = this.sendRankUpdate.bind(this);
  }

  moveBox(dragitem, hoverIndex) {
    let rank = this.state.rank;
    if((hoverIndex === 1 || hoverIndex === 0 )&& rank[hoverIndex] === dragitem ){
      let temp = rank[0]
      rank[0] =rank[1]
      rank[1] = temp;
      this.setState({rank})
    }
  }

  addToRank(name){
    if(!this.state.rank.includes(name)){
      let rank;
      if(this.state.rank.length){
        rank = this.state.rank
        let temp = rank[0];
        rank[0] = name;
        rank[1] = temp;
      }else{
        rank = [name];
      }
      this.setState({rank})
    }
  }

  removeRank(name){
    let rank = this.state.rank
    var index = rank.indexOf(name);
    if (index > -1) {
      rank.splice(index, 1);
    }
    this.setState({rank})
  }



  sendRankUpdate(e){
    if (this.state.rank.length){
      let rank = this.state.rank.map(rank =>{
        switch (rank) {
          case 'Safety':
          return 'crimes'
          case 'Public Transit':
          return 'transitStops'
          case 'Restaurants':
          return 'restaurants'
          default:
        }
      })
      this.props.updateRank(rank);
    }
  }

  render() {
    const { canDrop, isOver, allowedDropEffect, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#222';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }

    let currentRank;
    if (this.state.rank.length){
      currentRank =
      <ul className="all-categories-container">
        {this.state.rank.map((category,id) => {
          return(
            <li key= {id} className="category-container">
                <Box name={category}
                     removeRank={this.removeRank}
                     iCameFrom={'calc Dustbin'}/>
            </li>
          )
        }
        )}
      </ul>
    }else{
      currentRank =
          <p>Please drag categories here</p>
    }



    return connectDropTarget(
      <div className="drag-area">
        <h1>
          {isActive ?
            'Drop Here' :
            'Displayed on Map'
          }
        </h1>
          { currentRank }
        <Button
          bsStyle="success"
          onClick={this.sendRankUpdate}>
          Calculate</Button>
      </div>
    );
  }
}

Dustbin.propTypes = {
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
  allowedDropEffect: PropTypes.string.isRequired,
};

export default DropTarget(ItemTypes.BOX, boxTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  })
)(Dustbin);
