import { combineReducers } from 'redux'
import client from './clientDuck'
import login from './loginDuck'
import messages from './messagesDuck'
import app from './appDuck'

export default combineReducers({
  client,
  login,
  messages,
  app
})
