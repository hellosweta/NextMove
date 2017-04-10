import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './item_types';
import merge from 'lodash.merge';
import Box from './box';

const boxTarget = {
  drop(props, monitor, component) {
    component.addToChooseRank(monitor.getItem().name);
    return {
      name: `choose Dustbin`,
      allowedDropEffect: props.allowedDropEffect,
    };
  },
};

class Dustbin extends Component {
  constructor(props){
    super(props)
    this.state={ rank: ['Crime', 'Public Transit' ,'Restaurants']}

    this.removeRank = this.removeRank.bind(this);
    this.addToChooseRank = this.addToChooseRank.bind(this);
  }

  addToChooseRank(name){
    if(!this.state.rank.includes(name)){
      let rank = this.state.rank
      rank.push(name);
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

  render() {
    const { canDrop, isOver, allowedDropEffect, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#222';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }

    let currentRank = <ul className="all-categories-container">
      {this.state.rank.map( (category,id) => {
        return(
          <li key= {id} className="category-container">
              <Box name={category}
                   removeRank={this.removeRank}
                   addToChooseRank={this.addToChooseRank}
                   iCameFrom={'choose Dustbin'}/>
          </li>
        )
      }
      )}
          </ul>

    return connectDropTarget(
      <div className="drag-area">
        <h1>
          {isActive ?
            'Drop Here' :
            'Choose Two Categories'
          }
        </h1>
          { currentRank }
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
