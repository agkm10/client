import { combineReducers } from "redux"
import clientDuck from './clientDuck'
import loginDuck from './loginDuck'
import messagesDuck from './messagesDuck'
import appDuck from './appDuck'

export default combineReducers({
  clientDuck,
  loginDuck,
  messagesDuck,
  appDuck
})