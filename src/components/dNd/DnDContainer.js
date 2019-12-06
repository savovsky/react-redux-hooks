import React from 'react';

const DnDContainer = (props) => {

  const handleDrop = e => {
    console.log('handleDrop ', e);
    e.preventDefault();

    const item_id = e.dataTransfer.getData('item_id');
    const item = document.getElementById(item_id);

    console.log('item_id ', item_id);
    console.log('e.target ', e.target.id);

    if (item) {
      console.log('item ', item);
      item.style.display = 'block';
      item.style.opacity = '1';
      e.target.appendChild(item);
    }
  };

  const handleDragOver = e => {
    // console.log('handleDragOver ', e);
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

export default DnDContainer;
