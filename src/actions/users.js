export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_QUESTION_ANSWER_AT_USERS = 'SAVE_QUESTION_ANSWER_AT_USERS';
export const ADD_NEW_QUESTION_AT_USERS = 'ADD_NEW_QUESTION_AT_USERS';
export const RESET_USERS = 'RESET_USERS';

export function receiveUsers(users){
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function saveQuestionAnswerAtUsers(userId, questionId, answer){
  return {
    type: SAVE_QUESTION_ANSWER_AT_USERS,
    userId, questionId, answer,
  }
}

export function addNewQuesitonAtUsers(userId, questionId){
  return {
    type: ADD_NEW_QUESTION_AT_USERS,
    userId, questionId
  }
}

export function resetUsers(){
  return {
    type: RESET_USERS,
  }
}