import jsonPlaceholder from '../apis/jsonPlaceholder';
import * as Utils from '../utils/commonUtils';

export const fetchUser = (id) => async (dispatch) => {
  dispatch(fetchUserStart());
  const [response, error] = await Utils.to(jsonPlaceholder.get(`users/${id}`));

  if (response) {
    dispatch(fetchUserFulfilled(response.data));
  } else {
    dispatch(fetchUserRejected(error));
  }

};

export const fetchUsers = () => async (dispatch) => {
  dispatch(fetchUsersStart());
  const [response, error] = await Utils.to(jsonPlaceholder.get('users'));

  if (response) {
    dispatch(fetchUsersFulfilled(response.data));
  } else {
    dispatch(fetchUsersRejected(error));
  }

};

const fetchUserStart = () => ({
  type: 'FETCH_USER_START'
});
  
const fetchUserFulfilled = (payload) => ({
  type: 'FETCH_USER_FULFILLED',
  payload
});
  
const fetchUserRejected= (payload) => ({
  type: 'FETCH_USER_REJECTED',
  payload
});

const fetchUsersStart = () => ({
  type: 'FETCH_USERS_START'
});

const fetchUsersFulfilled = (payload) => ({
  type: 'FETCH_USERS_FULFILLED',
  payload
});

const fetchUsersRejected= (payload) => ({
  type: 'FETCH_USERS_REJECTED',
  payload
});
