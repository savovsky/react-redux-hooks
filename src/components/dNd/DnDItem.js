import React from 'react';

const DnDItem = (props) => {

  const handleDragStart = e => {
    // console.log('handleDragStart ', e);
    const item = e.target;
    console.log('item ', item.id);

    e.dataTransfer.setData('item_id', item.id);

    setTimeout(() => {
      item.style.opacity = '0.3';
    }, 0);
  }

  const handleDragOver = e => {
    e.stopPropagation();
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
