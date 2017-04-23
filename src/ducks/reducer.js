import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'
import clientDuck from './clientDuck'
import loginDuck from './loginDuck'
import messageDuck from './messageDuck'
import appDuck from './appDuck'
import inputDuck from './inputDuck'
import uploadDuck from './uploadDuck'
import authDuck from './authDuck'

export default combineReducers({
  clientDuck,
  loginDuck,
  messageDuck,
  appDuck,
  inputDuck,
  uploadDuck,
  authDuck,
  form:formReducer
})
