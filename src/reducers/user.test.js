import { RECEIVE_USERS } from '../actions/users';
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