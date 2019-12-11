import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import dndBoardsReducer from './dndBoardsReducer';
import dndItemReducer from './dndItemReducer';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer,
    dndBoards: dndBoardsReducer,
    dndItem: dndItemReducer
});
