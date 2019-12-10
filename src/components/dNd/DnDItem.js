import React from 'react';

const DnDItem = (props) => {

  const handleDragStart = e => {
    e.persist();
    const dragItemId = e.target.id;
    const sourceContainerId = e.target.parentNode.id;
    e.dataTransfer.setData('dragItem', dragItemId);
    e.dataTransfer.setData('sourceContainer', sourceContainerId);

    console.log('%c drag itemId = ', 'color: deepskyblue', dragItemId);
    console.log('%c source containerId = ', 'color: gold', sourceContainerId);
  }

  const handleDragOver = e => {
    e.stopPropagation();

    console.log('%c drag over itemId = ', 'color: darkcyan', e.currentTarget.id);
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

export default DnDItem;
