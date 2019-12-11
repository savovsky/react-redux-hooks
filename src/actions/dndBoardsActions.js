
export const initBoards = (ids) => ({
  type: 'INIT_BOARDS',
  payload: { ids }
});

export const addToBoard = (boardId, itemId) => ({
  type: 'ADD_TO_BOARD',
  payload: { boardId, itemId }
});

export const removeFromBoard = (boardId, itemId) => ({
  type: 'REMOVE_FROM_BOARD',
  payload: { boardId, itemId }
});

export const addPlaceholder = (boardId, placeholderId) => ({
  type: 'ADD_PLACEHOLDER',
  payload: { boardId, placeholderId }
});

export const removePlaceholder = (boardId, placeholderId) => ({
  type: 'REMOVE_PLACEHOLDER',
  payload: { boardId, placeholderId }
});
