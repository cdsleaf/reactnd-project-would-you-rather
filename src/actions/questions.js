export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER_AT_QUESTION = 'SAVE_QUESTION_ANSWER_AT_QUESTION';

export function receiveQuestions(questions){
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function saveQuestionAnswerAtQuestion(userId, questionId, answer){
  return {
    type: SAVE_QUESTION_ANSWER_AT_QUESTION,
    userId, questionId, answer,
  }
}