import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
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
    component.addToRank(monitor.getItem().name);
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
    let rank = this.state.rank.map(rank =>{
      switch (rank) {
        case 'Crime':
        return 'crimes'
        case 'TransitStops':
        return 'transitStops'
        case 'Restaurant':
          return 'restaurants'
        default:
      }
    })
    this.props.updateRank(rank);
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

    let currentRank = <ul className="all-boxes-container">
      {this.state.rank.map((category,id) => {
        return(
          <li key= {id} className="box-container">
              <Box name={category}
                   removeRank={this.removeRank}
                   iCameFrom={'calc Dustbin'}/>
          </li>
        )
      }
      )}
    </ul>


    return connectDropTarget(
      <div className="category-box">
      <div>
        {isActive ?
          'Release to drop' :
          'Drag a category here'
        }
      </div>
        { currentRank }
      <button onClick={this.sendRankUpdate}>Calculate</button>
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
