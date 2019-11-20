export default (state = [], action) => {
    switch (action.type) {
        case 'FEYCH_POSTS' : 
            return action.payload;
        default: 
            return state;
    }
}
