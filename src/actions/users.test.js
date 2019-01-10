import { RECEIVE_USERS, receiveUsers } from './users';

it('should create an action to receive users', () => {
  const users = {testUser1: {}, testUser2: {}};
  const expectedAction = {
    type: RECEIVE_USERS,
    users,
  }
  expect(receiveUsers(users)).toEqual(expectedAction);
});