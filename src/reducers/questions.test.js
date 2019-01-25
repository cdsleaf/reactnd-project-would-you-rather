import { 
  RECEIVE_QUESTIONS, 
  SAVE_QUESTION_ANSWER_AT_QUESTION,
  ADD_NEW_QUESTION_AT_QUESTION,
  RESET_QUESTIONS,
} from '../actions/questions';
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

it('should update question answer in the question store', () => {
  const dumyState = {
    vthrdm985a262al8qx3do: {
      id: 'vthrdm985a262al8qx3do',
      author: 'tylermcginnis',
      timestamp: 1489579767190,
      optionOne: {
        votes: ['tylermcginnis'],
        text: 'find $50 yourself',
      },
      optionTwo: {
        votes: ['johndoe'],
        text: 'have your best friend find $500'
      }
    },
  };

  const action = {
    type: SAVE_QUESTION_ANSWER_AT_QUESTION,
    userId: 'sarahedo', 
    questionId: 'vthrdm985a262al8qx3do', 
    answer: 'optionOne',
  }

  const expectedState = {
    vthrdm985a262al8qx3do: {
      id: 'vthrdm985a262al8qx3do',
      author: 'tylermcginnis',
      timestamp: 1489579767190,
      optionOne: {
        votes: ['tylermcginnis', 'sarahedo'],
        text: 'find $50 yourself',
      },
      optionTwo: {
        votes: ['johndoe'],
        text: 'have your best friend find $500'
      }
    },
  }

  expect(questions(dumyState, action)).toEqual(expectedState);
});

it('should add new ID of the question in the question store', () => {
  const dumyState = {
    vthrdm985a262al8qx3do: {
      id: 'vthrdm985a262al8qx3do',
      author: 'tylermcginnis',
      timestamp: 1489579767190,
      optionOne: {
        votes: ['tylermcginnis'],
        text: 'find $50 yourself',
      },
      optionTwo: {
        votes: ['johndoe'],
        text: 'have your best friend find $500'
      }
    },
  };

  const action = {
    type: ADD_NEW_QUESTION_AT_QUESTION,
    question: {
      id: 'newQuestionId',
      author: 'sarahedo',
      timestamp: 9489579767190,
      optionOne: {
        votes: [],
        text: 'new optionOne',
      },
      optionTwo: {
        votes: [],
        text: 'new optionTwo'
      }
    }
  }

  const expectedState = {
    vthrdm985a262al8qx3do: {
      id: 'vthrdm985a262al8qx3do',
      author: 'tylermcginnis',
      timestamp: 1489579767190,
      optionOne: {
        votes: ['tylermcginnis'],
        text: 'find $50 yourself',
      },
      optionTwo: {
        votes: ['johndoe'],
        text: 'have your best friend find $500'
      }
    },
    newQuestionId: {
      id: 'newQuestionId',
      author: 'sarahedo',
      timestamp: 9489579767190,
      optionOne: {
        votes: [],
        text: 'new optionOne',
      },
      optionTwo: {
        votes: [],
        text: 'new optionTwo'
      }
    }
  }

  expect(questions(dumyState, action)).toEqual(expectedState);
})

it('should handl RESET_QUESTIONS', () => {
  const dumyState = {
    vthrdm985a262al8qx3do: {
      id: 'vthrdm985a262al8qx3do',
      author: 'tylermcginnis',
      timestamp: 1489579767190,
      optionOne: {
        votes: ['tylermcginnis'],
        text: 'find $50 yourself',
      },
      optionTwo: {
        votes: ['johndoe'],
        text: 'have your best friend find $500'
      }
    },
  };
  const action = {
    type: RESET_QUESTIONS,
  }
  const expectedState = {}

  expect(questions(dumyState, action)).toEqual(expectedState);
})