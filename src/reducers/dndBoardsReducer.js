import * as DefaultState from '../store/defaultStates'


export default (state = DefaultState.dndBoards, action) => {
    const payload = action.payload;
    
    switch (action.type) {
        case 'INIT_BOARDS' : {
            return {
                ...state,
                b1: [...payload.ids]
            };
        }
        case 'ADD_TO_BOARD' : {
            return {
                ...state,
                [payload.boardId]: [...state[payload.boardId], payload.itemId]
            };
        }
        case 'REMOVE_FROM_BOARD' : {
            return {
                ...state,
                [payload.boardId]: state[payload.boardId].filter(id => id !== payload.itemId)
            };
        }
        case 'ADD_PLACEHOLDER' : {
            return {
                ...state,
                [payload.boardId]: [...state[payload.boardId], payload.placeholderId]
            };
        }
        case 'REMOVE_PLACEHOLDER' : {
            return {
                ...state,
                [payload.boardId]: state[payload.boardId].filter(id => id !== payload.placeholderId)
            };
        }

        default: 
            return state;
    }
}
