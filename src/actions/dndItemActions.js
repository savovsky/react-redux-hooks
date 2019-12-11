
export const dragStart = (dragItemId, sourceContainerId) => ({
  type: 'DRAG_START',
  payload: { dragItemId, sourceContainerId }
});

export const dragOverItem = (overItemId) => ({
  type: 'DRAG_OVER_ITEM',
  payload: { overItemId }
});

export const dragOverContainer = (overContainerId) => ({
  type: 'DRAG_OVER_CONTAINER',
  payload: { overContainerId }
});

export const dragEnd = () => ({
  type: 'DRAG_END'
});
