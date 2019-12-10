
const dndBoardsDefaultState = {
    b1: [],
    b2: [],
    b3: []
}

export default (state = dndBoardsDefaultState, action) => {

    switch (action.type) {
        case 'ADD_TO_BOARD' : {
            return {
                ...state,
                [action.payload.boardId]: [
                    ...state[action.payload.boardId],
                    action.payload.itemId
                ]
            };
        }
        case 'REMOVE_FROM_BOARD' : {
            return {
                ...state,
                [action.payload.boardId]: [
                    ...state[action.payload.boardId].filter(id => id !== action.payload.boardId)]
            };
        }

        default: 
            return state;
    }
}
