import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './item_types';
import merge from 'lodash.merge';
import Box from './box';


const style = {
  height: '20vw',
  width:  '30vw',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
};

const boxTarget = {
  drop(props, monitor, component) {
    component.addToChooseRank(monitor.getItem().name);
    return {
      name: `${props.allowedDropEffect} Dustbin`,
      allowedDropEffect: props.allowedDropEffect,
    };
  },
};

class Dustbin extends Component {
  constructor(props){
    super(props)
    this.state={ rank: ['Crime', 'TransitStops' ,'Restaurant']}

    this.removeRank = this.removeRank.bind(this);
    this.addToChooseRank = this.addToChooseRank.bind(this);
  }

  addToChooseRank(name){
    let rank = this.state.rank
    rank.push(name);
    this.setState({rank})
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

    let currnetRank = <ul>
      {this.state.rank.map( (category,id) => {
        return(
          <li key= {id}>
              <Box name={category}
                   removeRank={this.removeRank}
                   addToChooseRank={this.addToChooseRank}/>
          </li>
        )
      }
      )}
          </ul>

    return connectDropTarget(
      <div style={merge({},style,{backgroundColor})}>
      <div >
        {isActive ?
          'Release to drop' :
          'Choose a category'
        }
      </div>
        { currnetRank }
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