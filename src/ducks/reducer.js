import { combineReducers } from "redux"
import clientDuck from './clientDuck'
import loginDuck from './loginDuck'
import messagesDuck from './messagesDuck'
import appDuck from './appDuck'
import inputDuck from './inputDuck'

export default combineReducers({
  clientDuck,
  loginDuck,
  messagesDuck,
  appDuck,
  inputDuck
})
