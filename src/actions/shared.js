import { 
  getUsers, 
  getInitialData, 
  saveQuestionAnswer,
  saveQuestion,
 } from '../utils/api';
import { 
  receiveUsers, 
  saveQuestionAnswerAtUsers,
  addNewQuesitonAtUsers,
} from './users';
import { 
  receiveQuestions, 
  saveQuestionAnswerAtQuestion, 
  addNewQuesitonAtQuestion,
} from './questions';
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

export function saveQuestionAnswerAtAll(userId, questionId, answer){
  return (dispatch) => {
    const info = {
      authedUser: userId, 
      qid: questionId, 
      answer,
    }
    dispatch(showLoading())
    return saveQuestionAnswer(info).then(res => {
      dispatch(saveQuestionAnswerAtUsers(userId, questionId, answer));
      dispatch(saveQuestionAnswerAtQuestion(userId, questionId, answer));
      dispatch(hideLoading());
    })
  }
}

export function addNewQuestionAnswerAtAll(optionOneText, optionTwoText, author){
  return (dispatch) => {
    const question = {
      optionOneText, 
      optionTwoText, 
      author,
    }
    dispatch(showLoading())
    return saveQuestion(question).then(res => {
      dispatch(addNewQuesitonAtUsers(res.author, res.id));
      dispatch(addNewQuesitonAtQuestion(res));
      dispatch(hideLoading());
    })
  }
}
