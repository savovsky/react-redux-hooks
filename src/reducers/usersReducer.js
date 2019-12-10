import * as DefaultState from '../store/defaultStates';


export default (state = DefaultState.users, action) => {

    switch (action.type) {
        case 'FETCH_USER_START' : {
            return {
                ...state,
                fetching: true,
                fetchedFulfilled: false,
                fetchedRejected: false,
                errorMsg: ''
            };
        }
        case 'FETCH_USER_FULFILLED' : {
            return {
                ...state,
                fetching: false,
                fetchedFulfilled: true,
                fetchedRejected: false,
                users: [...state.users, action.payload]
            };
        }
        case 'FETCH_USER_REJECTED' : {
            return {
                ...state,
                fetching: false,
                fetchedFulfilled: false,
                fetchedRejected: true,
                errorMsg: action.payload
            };
        }

        case 'FETCH_USERS_START' : {
            return {
                ...state,
                fetching: true,
                fetchedFulfilled: false,
                fetchedRejected: false,
                errorMsg: ''
            };
        }
        case 'FETCH_USERS_FULFILLED' : {
            return {
                ...state,
                fetching: false,
                fetchedFulfilled: true,
                fetchedRejected: false,
                users: [...action.payload]
            };
        }
        case 'FETCH_USERS_REJECTED' : {
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
