import {combineReducers} from 'redux'
import currentUserReducer from './currentUserReducer'
import loginFormReducer from './loginFormReducer'
import userReducer from './userReducer'



export default combineReducers({
  currentUserReducer, loginFormReducer, userReducer
  })
