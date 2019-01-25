import { 
  RECEIVE_USERS, 
  SAVE_QUESTION_ANSWER_AT_USERS,
  ADD_NEW_QUESTION_AT_USERS,
  RESET_USERS,
} from '../actions/users';
import users from './users';

it('should return the initial state', () => {
  const dumyState = {dumyKey: 'dunmyValue'};
  expect(users(dumyState, {type: 'default'})).toEqual(dumyState);
})

it('should handle RECEIVE_USERS', () => {
  const dumyState = {testUser1: {}};
  const action = {
    type: RECEIVE_USERS,
    users: {
      testUser2:{
        userName: 'testUser2'
      }
    },
  }
  const expectedState = {
    testUser1: {},
    testUser2: {
      userName: 'testUser2'
    },
  }
  expect(users(dumyState, action)).toEqual(expectedState);
})

it('should update question answer in the user store', () => {
  const dumyState = {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: '/img/users-1.svg',
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionOne',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
  };

  const action = {
    type: SAVE_QUESTION_ANSWER_AT_USERS,
    userId: 'sarahedo', 
    questionId: 'vthrdm985a262al8qx3do', 
    answer: 'optionOne',
  }

  const expectedState = {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: '/img/users-1.svg',
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionOne',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo',
        "vthrdm985a262al8qx3do": 'optionOne',
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
  }

  expect(users(dumyState, action)).toEqual(expectedState);
})

it('should add new ID of the question in the user store', () => {
  const dumyState = {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: '/img/users-1.svg',
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionOne',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
  };

  const action = {
    type: ADD_NEW_QUESTION_AT_USERS,
    userId: 'sarahedo', 
    questionId: 'newQuestionId'
  }

  const expectedState = {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: '/img/users-1.svg',
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionOne',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo',
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9', 'newQuestionId']
    },
  }

  expect(users(dumyState, action)).toEqual(expectedState);
})

it('should handle RESET_USERS', () => {
  const dumyState = {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: '/img/users-1.svg',
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionOne',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
  };
  const action = {
    type: RESET_USERS,
  }
  const expectedState = {}
  
  expect(users(dumyState, action)).toEqual(expectedState);
})