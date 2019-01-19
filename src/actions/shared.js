import { getUsers, getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function handleInitialLoginData(){
  return (dispatch) => {
    dispatch(showLoading())
    return getUsers().then((users) => {
      dispatch(receiveUsers(users));
      dispatch(hideLoading())
    })
  }
}
  
export function handlInitialData(){
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({ questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading())
    })
  }
}
