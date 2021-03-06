import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA'

export function getUsers(){
  return _getUsers();
}

export function getInitialData(){
  return Promise.all([_getUsers(), _getQuestions()])
  .then(([users, questions]) => ({ users, questions }));
}

export function saveQuestion(info){
  return _saveQuestion(info);
}

export function saveQuestionAnswer(info){
  return _saveQuestionAnswer(info);
}

export function setSesstion(id){
  localStorage.setItem('wouldYouRatherSession', id);
}

export function deleteSession(id){
  localStorage.removeItem('wouldYouRatherSession');
}

export function getSession(){
  return localStorage.getItem('wouldYouRatherSession');
}