import React from 'react';

const DnDContainer = (props) => {

  const handleDrop = e => {
    console.log('handleDrop conatiner id ', e.currentTarget.id);
    e.preventDefault();

    const dragItemId = e.dataTransfer.getData('dragItemId');
    const dragItem = document.getElementById(dragItemId);


    if (dragItem) {
      console.log('handleDrop dragItem id ', dragItem.id);
      dragItem.style.display = 'block';
      e.target.appendChild(dragItem);
    }

  };

  const handleDragOver = e => {
    console.log('handleDragOver ', e.currentTarget.id);
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
