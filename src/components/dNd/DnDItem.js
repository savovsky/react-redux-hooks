import React from 'react';

const DnDItem = (props) => {

  const handleDragStart = e => {
    // console.log('handleDragStart ', e);
    const item = e.target;
    console.log('item ', item.id);

    e.dataTransfer.setData('dragItemId', item.id);
    // e.dataTransfer.dropEffect = 'move';

    // item.style.opacity = '0.3';
    // item.style.display = 'none';

    setTimeout(() => {
      item.style.display = 'none';
    }, 0);
  }

  const handleDragOver = e => {
    console.log('handleDragOver ', e.currentTarget.id);
    const item = document.getElementById(e.currentTarget.id);
    item.style.marginTop = '132px';
    // console.log('handleDragOver ', e.nativeEvent.path);
    // if (e.nativeEvent.path.find((el) => el.id === 'c-2')) {
    //   console.log('c-2');
    // } else {
    //   console.log('other');
    // }
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
