import * as DefaultState from '../store/defaultStates';


export default (state = DefaultState.dndBoards, action) => {
    const {boardId, itemId} = action.payload;

    switch (action.type) {
        case 'ADD_TO_BOARD' : {
            return {
                ...state,
                [boardId]: [...state[boardId], itemId]
            };
        }
        case 'REMOVE_FROM_BOARD' : {
            return {
                ...state,
                [boardId]: state[boardId].filter(id => id !== itemId)
            };
        }

        default: 
            return state;
    }
}
