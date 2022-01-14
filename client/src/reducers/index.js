import { combineReducers } from 'redux';
import comics from './comic_reducer';
// import user from './user_reducer';

const rootReducer = combineReducers({
    comics
});

export default rootReducer;