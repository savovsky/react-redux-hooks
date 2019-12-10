
export const addToBoard = (boardId, itemId) => ({
  type: 'ADD_TO_BOARD',
  payload: { boardId, itemId }
});

export const removeFromBoard = (boardId, itemId) => ({
  type: 'REMOVE_FROM_BOARD',
  payload: { boardId, itemId }
});
