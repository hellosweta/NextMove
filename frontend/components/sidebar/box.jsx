import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './item_types';

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
    };
  },

  endDrag(props, monitor, component) {
   const item = monitor.getItem();
   const dropResult = monitor.getDropResult();
   if(dropResult && props.iCameFrom !== dropResult.name){
     props.removeRank(props.name, props.iCameFrom);
   }
 },
};

 class Box extends Component {

  render() {
    const { isDragging, connectDragSource } = this.props;
    const { name } = this.props;
    const opacity = isDragging ? 0.5 : 1;
    const className = isDragging ?  'empty_category': this.props.className;

    return (
      connectDragSource(
        <div style={{opacity}} className={className}>
          <i className ="material-icons">drag_handle</i>
          {name}
        </div>
      )
    );
  }
}

 Box.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }))(Box);
