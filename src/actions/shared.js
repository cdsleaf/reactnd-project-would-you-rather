import { getUsers } from '../utils/api';
import { receiveUsers } from './users.js';

export function handleInitialLoginData(){
  return (dispatch) => {
    return getUsers().then((users) => {
      dispatch(receiveUsers(users));
    })
  }
}

