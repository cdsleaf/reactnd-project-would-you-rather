import { getUsers, getInitialData, saveQuestionAnswer } from '../utils/api';
import { receiveUsers, saveQuestionAnswerAtUsers } from './users';
import { receiveQuestions, saveQuestionAnswerAtQuestion } from './questions';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function handleInitialLoginData(){
  return (dispatch) => {
    dispatch(showLoading())
    return getUsers().then((users) => {
      dispatch(receiveUsers(users));
      dispatch(hideLoading());
    })
  }
}
  
export function handlInitialData(){
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({ questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    })
  }
}

export function saveQuestionAnswerAtAll(userId, question, answer){
  return (dispatch) => {
    const info = {
      authedUser: userId, 
      qid: question, 
      answer,
    }
    dispatch(showLoading())
    return saveQuestionAnswer(info).then(res => {
      dispatch(saveQuestionAnswerAtUsers(userId, question, answer));
      dispatch(saveQuestionAnswerAtQuestion(userId, question, answer));
      dispatch(hideLoading());
    })
  }
}
