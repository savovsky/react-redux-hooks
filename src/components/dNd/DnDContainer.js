import React from 'react';
import { connect } from 'react-redux';

import * as ActionDndBoards from '../../actions/dndBoardsActions';
import * as ActionDndItem from '../../actions/dndItemActions';


const DnDContainer = (props) => {

  const placeholderId = 'placeholder';

  const handleDrop = e => {
    e.preventDefault();
    const containerId = e.currentTarget.id;
    const itemId = +e.dataTransfer.getData('dragItem');
    const sourceContainerId = e.dataTransfer.getData('sourceContainer');

    // console.log('%c dropped itemId = ', 'color: blue', itemId);
    // console.log('%c dropped to containerId = ', 'color: brown', containerId);
    // console.log('%c source containerId = ', 'color: red', sourceContainerId);

    if (itemId) {
      props.removePlaceholder(containerId, placeholderId);
      props.removeFromBoard(sourceContainerId, itemId);
      props.addToBoard(containerId, itemId);
      props.dragEnd();
    }

  };

  const handleDragOver = e => {
    e.preventDefault();
    const containerId = e.currentTarget.id;

    props.dragOverContainer(containerId);

    if (
        !props.dndBoards.filter(board => board.id === containerId)[0].items.find(id => id === placeholderId)) {
      props.addPlaceholder(containerId, placeholderId);

      props.dndBoards.filter(board => board.id !== containerId).forEach((board) => {
        props.removePlaceholder(board.id, placeholderId)
      });
    }

    // console.log('%c drag over containerId = ', 'color: coral', containerId);
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

const mapStateToProps = (state) => {
  return {
    dndBoards: state.dndBoards,
    dndItem: state.dndItem
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToBoard: (containerId, itemId) => (dispatch(ActionDndBoards.addToBoard(containerId, itemId))),
    removeFromBoard: (sourceContainerId, itemId) => (dispatch(ActionDndBoards.removeFromBoard(sourceContainerId, itemId))),
    addPlaceholder: (containerId, placeholderId) => (dispatch(ActionDndBoards.addPlaceholder(containerId, placeholderId))),
    removePlaceholder: (boardId, placeholderId) => (dispatch(ActionDndBoards.removePlaceholder(boardId, placeholderId))),
    dragEnd: () => (dispatch(ActionDndItem.dragEnd())),
    dragOverContainer: (containerId) => (dispatch(ActionDndItem.dragOverContainer(containerId)))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DnDContainer);
