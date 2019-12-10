import React from 'react';

const DnDItem = (props) => {

  const handleDragStart = e => {
    e.dataTransfer.setData('itemId', e.target.id);

    console.log('%c drag from containerId = ', 'color: gold', e.nativeEvent.path[1].id);
    console.log('%c drag itemId = ', 'color: deepskyblue', e.target.id);
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
