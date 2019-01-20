export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_QUESTION_ANSWER_AT_USERS = 'SAVE_QUESTION_ANSWER_AT_USERS';

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