import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import clientDuck from './clientDuck';
import socketDuck from './socketDuck';
import messageDuck from './messageDuck';
import inputDuck from './inputDuck';
import uploadDuck from './uploadDuck';
import authDuck from './authDuck';


export default combineReducers({
    clientDuck,
    socketDuck,
    messageDuck,
    inputDuck,
    uploadDuck,
    authDuck,
    form:formReducer
})
