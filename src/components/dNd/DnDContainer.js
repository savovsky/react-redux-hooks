import React from 'react';
import { connect } from 'react-redux';

import { addToBoard } from '../../actions/dndBoardsActions';

const DnDContainer = (props) => {
  const handleDrop = e => {
    const containerId = e.currentTarget.id;
    const itemId = +e.dataTransfer.getData('itemId');
    console.log('dropped containerId = ', containerId);
    console.log('dropped itemId = ', itemId);
    e.preventDefault();

    // const dragItem = document.getElementById(itemId);

    if (itemId) {
      // console.log('handleDrop dragItem id ', dragItem.id);
      // dragItem.style.display = 'block';
      // e.target.appendChild(dragItem);

      props.addToBoard(containerId, itemId);
    }

  };

  const handleDragOver = e => {
    // console.log('handleDragOver ', e.currentTarget.id);
    e.preventDefault();
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

// export default DnDContainer;
export default connect(null, { addToBoard })(DnDContainer);
