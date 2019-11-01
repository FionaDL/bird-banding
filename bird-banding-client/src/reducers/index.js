import {combineReducers} from 'redux'
import currentUserReducer from './currentUserReducer'
import loginFormReducer from './loginFormReducer'
import birdFormReducer from './birdReducer'
import allBirdsReducer from './allBirdsReducer'
import signUpFormReducer from './signUpFormReducer'



export default combineReducers({
  currentUserReducer, loginFormReducer, birdFormReducer, allBirdsReducer, signUpFormReducer
  })
