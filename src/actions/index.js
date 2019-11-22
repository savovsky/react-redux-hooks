// import jsonPlaceholder from '../apis/jsonPlaceholder';

// Action creators

// export const fetchPosts = () => async dispatch => {
//   const response = await jsonPlaceholder.get('posts');

//   dispatch({ type: 'FETCH_POSTS', payload: response.data });
// };

// REMIND Redux Thunk allows us to return a function OR object from a Action creator.
// Stephen 165 'Behind the Scenes of Redux Thunk', 191 App Wrapup

// export const fetchPosts = () => {
//   return async function(dispatch, getState) {
//     const response = await jsonPlaceholder.get('posts');

//     dispatch({ type: 'FETCH_POSTS', payload: response });
//   }
// };

// export const fetchUser = (id) => async dispatch => {
//   const response = await jsonPlaceholder.get(`users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// };
