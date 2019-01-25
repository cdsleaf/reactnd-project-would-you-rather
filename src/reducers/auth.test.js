import { SET_AUTHED_USER, RESET_AUTH } from '../actions/auth'
import auth from './auth';

it('should return the initial state', () => {
  const dumyState = {dumyKey: 'dunmyValue'};
  expect(auth(dumyState, {type: 'default'})).toEqual(dumyState);
})

it('should handle SET_AUTHED_USER', () => {
  const dumyState = {isAuthenticated: true};
  const action = {
    type: SET_AUTHED_USER,
    id: 'userId'
  }
  const expectedState = {
    authedUser: 'userId',
    isAuthenticated: true
  }
  expect(auth(dumyState, action)).toEqual(expectedState);
})

it('should handle RESET_AUTH', () => {
  const dumyState = {
    isAuthenticated: true,
    authedUser: 'testUserId',
  }
  const action= {
    type: RESET_AUTH,
  }
  const expectedState = {
    isAuthenticated: false,
    authedUser: '',
  }
  expect(auth(dumyState, action)).toEqual(expectedState);
})