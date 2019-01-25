import { 
  RECEIVE_USERS, 
  SAVE_QUESTION_ANSWER_AT_USERS,
  ADD_NEW_QUESTION_AT_USERS,
  RESET_USERS,
} from '../actions/users';

export default function users (state={}, action) {
  switch(action.type){
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_QUESTION_ANSWER_AT_USERS:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          answers: {
            ...state[action.userId].answers,
            [action.questionId]: action.answer
          }
        }
      }
    case ADD_NEW_QUESTION_AT_USERS:
      return {
        ...state,
        [action.userId]: {
          ...state[action.userId],
          questions: state[action.userId].questions.concat([action.questionId])
        }
      }
    case RESET_USERS:
      return {}
    default: 
      return state;
  }
}