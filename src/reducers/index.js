import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import auth from './auth';
import users from './users';
import questions from './questions';


export default combineReducers({
  auth,
  users,
  questions,
  loadingBar: loadingBarReducer,
})