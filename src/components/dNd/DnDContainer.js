import React from 'react';
import { connect } from 'react-redux';

import { addToBoard } from '../../actions/dndBoardsActions';

const DnDContainer = (props) => {
  const handleDrop = e => {
    e.preventDefault();
    const containerId = e.currentTarget.id;
    const itemId = +e.dataTransfer.getData('itemId');

    console.log('%c dropped to containerId = ', 'color: brown', containerId);
    console.log('%c dropped itemId = ', 'color: blue', itemId);

    if (itemId) {
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

export default connect(null, { addToBoard })(DnDContainer);
