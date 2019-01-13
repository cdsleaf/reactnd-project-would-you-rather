import { getUsers, getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export function handleInitialLoginData(){
  return (dispatch) => {
    return getUsers().then((users) => {
      dispatch(receiveUsers(users));
    })
  }
}
  
export function handlInitialData(){
  return (dispatch) => {
    return getInitialData().then(({users, questions}) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    })
  }
}
