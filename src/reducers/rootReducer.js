import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';
import commentReducer from './commentReducer';
import likeReducer from './likeReducer';

const rootReducer = combineReducers({
    post:postReducer,
    user:userReducer,
    comment:commentReducer,
    like:likeReducer
    
})

export default rootReducer;