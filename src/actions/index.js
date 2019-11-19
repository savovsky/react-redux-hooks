import jsonPlaceholder from '../apis/jsonPlaceholder';

// Action creators

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('posts');

  dispatch({ type: 'FEYCH_POSTS', payload: response });
};


// REMIND Redux Thunk allows us to return a function OR object from a Action creator.
// Stephen 165 'Behind the Scenes of Redux Thunk'

// export const fetchPosts = () => {
//   return async function(dispatch, getState) {
//     const response = await jsonPlaceholder.get('posts');

//     dispatch({ type: 'FEYCH_POSTS', payload: response });
//   }
// };
