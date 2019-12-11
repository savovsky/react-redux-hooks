import React from 'react';
import { connect } from 'react-redux';

import * as Action from '../../actions/dndItemActions';


const DnDItem = (props) => {

  const handleDragStart = e => {
    const dragItemId = e.target.id;
    const sourceContainerId = e.target.parentNode.id;
    e.dataTransfer.setData('dragItem', dragItemId);
    e.dataTransfer.setData('sourceContainer', sourceContainerId);

    // console.log('%c drag itemId = ', 'color: deepskyblue', dragItemId);
    // console.log('%c source containerId = ', 'color: gold', sourceContainerId);

    props.dragStart(dragItemId, sourceContainerId);
  }

  const handleDragOver = e => {
    // e.stopPropagation();
    const dragOverItemId = e.currentTarget.id;
    
    // console.log('%c drag over itemId = ', 'color: darkcyan', dragOverItemId);

    props.dragOverItem(dragOverItemId);
  }
    return (
      <div
        id={props.id}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        draggable
      >
        {props.children}
      </div>
    );
  
};

const mapDispatchToProps = (dispatch) => {
  return {
    dragStart: (dragItemId, sourceContainerId) => (dispatch(Action.dragStart(dragItemId, sourceContainerId))),
    dragOverItem: (dragOverItemId) => (dispatch(Action.dragOverItem(dragOverItemId)))
  };
};


export default connect(null, mapDispatchToProps)(DnDItem);
