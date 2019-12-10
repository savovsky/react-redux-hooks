import React from 'react';
import { connect } from 'react-redux';

import { addToBoard, removeFromBoard } from '../../actions/dndBoardsActions';

const DnDContainer = (props) => {
  const handleDrop = e => {
    e.preventDefault();
    const containerId = e.currentTarget.id;
    const itemId = +e.dataTransfer.getData('dragItem');
    const sourceContainerId = e.dataTransfer.getData('sourceContainer');

    console.log('%c dropped itemId = ', 'color: blue', itemId);
    console.log('%c dropped to containerId = ', 'color: brown', containerId);
    console.log('%c source containerId = ', 'color: red', sourceContainerId);

    if (itemId) {
      props.removeFromBoard(sourceContainerId, itemId);
      props.addToBoard(containerId, itemId);
    }

  };

  const handleDragOver = e => {
    e.preventDefault();

    console.log('%c drag over containerId = ', 'color: coral', e.currentTarget.id);
  };

  return (
    <div
      id={props.id}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="board"
    >
      {props.children}
    </div>
  );
};

export default connect(null, { addToBoard, removeFromBoard })(DnDContainer);
