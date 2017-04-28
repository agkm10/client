import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer } from 'react-redux-sweetalert';
import clientDuck from './clientDuck';
import messageDuck from './messageDuck';
import inputDuck from './inputDuck';
import uploadDuck from './uploadDuck';
import authDuck from './authDuck';


export default combineReducers({
    authDuck,
    messageDuck,
    clientDuck,
    inputDuck,
    uploadDuck,
    form:formReducer,
    sweetalert: reducer
})
