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

    let emptySpotsClass = 'empty_category';
    let otherEmptySpotsClass = 'empty_category';
    if (isActive) {
      emptySpotsClass = "empty_category green";
    } else if (canDrop) {
      emptySpotsClass = 'empty_category yellow';
    }

    let addEmptyCount = 3 - this.state.rank.length;
    let addEmptyArr = Array.from(new Array(addEmptyCount),(val,index)=>index+ 1);
    let currentRank = <ul className="all-categories-container">
      {this.state.rank.map( (category,id) => {
        return(
          <li key= {id} className="category-container">
              <Box name={category}

                   className={"category"}
                   removeRank={this.removeRank}
                   addToChooseRank={this.addToChooseRank}
                   iCameFrom={'choose Dustbin'}/>
          </li>
        )
      }
      )}

      {addEmptyArr.map((val) => {
          if (val === 1){
            return(
            <li key= {val * 10} className="category-container">
              <div className={emptySpotsClass}>
              </div>
            </li>
          )
          }else {
            return(
            <li key= {val * 10} className="category-container">
              <div className={otherEmptySpotsClass}>
              </div>
            </li>
          )
        }
      }
      )}
    </ul>

    return connectDropTarget(
      <div className="drag-area">
        <h1>
          {isActive ?
            'Drop Here' :
            'Drag Up To Two Categories'
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
