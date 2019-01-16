import { SET_AUTHED_USER } from '../actions/auth'
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