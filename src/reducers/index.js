import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import dndBoardsReducer from './dndBoardsReducer';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer,
    dndBoards: dndBoardsReducer
});
