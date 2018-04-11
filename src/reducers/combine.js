import animation from './animation';
import edit from './edit';
import { combineReducers } from 'redux'

const gamgeulApp = combineReducers({
    animation,
    edit
});

export default gamgeulApp;