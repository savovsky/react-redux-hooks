import jsonPlaceholder from '../apis/jsonPlaceholder';
import * as Utils from '../utils/commonUtils';

// Action creators

// REMIND Redux Thunk allows us to return a function OR object from a Action creator.
// Stephen 165 'Behind the Scenes of Redux Thunk', 191 App Wrapup

// export const fetchPosts = () => {
//   return async function(dispatch, getState) {
//     const response = await jsonPlaceholder.get('posts');

//     dispatch({ type: 'FETCH_POSTS_START', payload: response });
//   }
// };

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsStart());
  const [response, error] = await Utils.to(jsonPlaceholder.get('posts'));

  if (response) {
    dispatch(fetchPostsFulfilled(response.data));
  } else {
    dispatch(fetchPostsRejected(error));
  }

};

const fetchPostsStart = () => ({
  type: 'FETCH_POSTS_START'
});

const fetchPostsFulfilled = (payload) => ({
  type: 'FETCH_POSTS_FULFILLED',
  payload
});

const fetchPostsRejected= (payload) => ({
  type: 'FETCH_POSTS_REJECTED',
  payload
});
