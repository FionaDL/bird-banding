import {combineReducers} from 'redux'
import currentUserReducer from './currentUserReducer'
import loginFormReducer from './loginFormReducer'
import birdFormReducer from './birdReducer'



export default combineReducers({
  currentUserReducer, loginFormReducer, birdFormReducer
  })
