import * as DefaultState from '../store/defaultStates'


export default (state = DefaultState.dndBoards, action) => {
    const payload = action.payload;
    
    switch (action.type) {
        case 'INIT_BOARDS' : {
            return [
                ...state.map(board => {
                    if (board.id === 'b1') {
                        return {...board, items:[...payload.ids]};
                    }
                    return board;
                })
            ];
        }
        case 'ADD_TO_BOARD' : {
            return [
                ...state.map(board => {
                    if (board.id === payload.boardId) {
                        return {...board, items:[...board.items, payload.itemId]};
                    }
                    return board;
                })
            ];
        }
        case 'REMOVE_FROM_BOARD' : {
            return [
                ...state.map(board => {
                    if (board.id === payload.boardId) {
                        return {...board, items: board.items.filter(id => id !== payload.itemId)};
                    }
                    return board;
                })
            ];
        }
        case 'ADD_PLACEHOLDER' : {
            return [
                ...state.map(board => {
                    if (board.id === payload.boardId) {
                        return {...board, items:[...board.items, payload.placeholderId]};
                    }
                    return board;
                })
            ];
        }
        case 'REMOVE_PLACEHOLDER' : {
            return [
                ...state.map(board => {
                    if (board.id === payload.boardId) {
                        return {...board, items: board.items.filter(id => id !== payload.placeholderId)};
                    }
                    return board;
                })
            ];
        }

        default: 
            return state;
    }
}
