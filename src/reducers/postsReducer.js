import * as DefaultState from '../store/defaultStates';


export default (state = DefaultState.posts, action) => {

    switch (action.type) {
        case 'FETCH_POSTS_START' : {
            return {
                ...state,
                fetching: true,
                fetchedFulfilled: false,
                fetchedRejected: false,
                errorMsg: ''
            };
        }
        case 'FETCH_POSTS_FULFILLED' : {
            return {
                ...state,
                fetching: false,
                fetchedFulfilled: true,
                fetchedRejected: false,
                posts: action.payload
            };
        }
        case 'FETCH_POSTS_REJECTED' : {
            return {
                ...state,
                fetching: false,
                fetchedFulfilled: false,
                fetchedRejected: true,
                errorMsg: action.payload
            };
        }

        default: 
            return state;
    }
}
