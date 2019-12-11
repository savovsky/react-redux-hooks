import * as DefaultState from '../store/defaultStates';


export default (state = DefaultState.dndItem, action) => {
    const payload = action.payload;

    switch (action.type) {
        case 'DRAG_START' : {
            return {
                ...state,
                dragging: true,
                dragItemId: payload.dragItemId,
                sourceContainerId: payload.sourceContainerId
            };
        }
        case 'DRAG_OVER_ITEM' : {
            return {
                ...state,
                overItemId: payload.overItemId
            };
        }
        case 'DRAG_OVER_CONTAINER' : {
            return {
                ...state,
                overContainerId: payload.overContainerId
            };
        }
        case 'DRAG_END' : {
            return {
                ...state,
                ...DefaultState.dndItem
            };
        }

        default: 
            return state;
    }
}
