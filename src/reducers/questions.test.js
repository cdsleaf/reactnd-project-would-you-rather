import { RECEIVE_QUESTIONS } from '../actions/questions';
import questions from './questions';

it('should return the initial state', () => {
  const dumyState = {dumyKey: 'dunmyValue'};
  expect(questions(dumyState, {type: 'default'})).toEqual(dumyState);
})

it('should handle RECEIVE_QUESTIONS', () => {
  const dumyState = {testQuestion1: {}};
  const action = {
    type: RECEIVE_QUESTIONS,
    questions: {
      testQuestion2:{
        testQuestionId: 'testQuestion2'
      }
    },
  }
  const expectedState = {
    testQuestion1: {},
    testQuestion2: {
      testQuestionId: 'testQuestion2'
    },
  }
  expect(questions(dumyState, action)).toEqual(expectedState);
})