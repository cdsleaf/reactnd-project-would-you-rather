import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER_AT_QUESTION } from '../actions/questions';

export default function questions (state={}, action) {
  switch(action.type){
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION_ANSWER_AT_QUESTION:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.answer]: {
            ...state[action.questionId][action.answer],
            votes: state[action.questionId][action.answer].votes.concat([action.userId])
          }
        }
      }
    default: 
      return state;
  }
}