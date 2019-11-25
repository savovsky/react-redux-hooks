
const usersDefaultState = {
    fetching: false,
    fetchedFulfilled: false,
    fetchedRejected: false,
    errorMsg: '',
    users: []
}

export default (state = usersDefaultState, action) => {

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

        default: 
            return state;
    }
}
