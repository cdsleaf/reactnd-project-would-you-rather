import { handleInitialLoginData, handlInitialData } from './shared';

it('Should create an action to set the initial login Data (user List)', () => {
  let mockStore = {};
  const mockDispatch = jest.fn( v => mockStore = { ...mockStore, ...v }); 
  return handleInitialLoginData()(mockDispatch)
    .then(() => expect(mockStore).toHaveProperty('type', 'RECEIVE_USERS'));
});

it('Should create an action to set the initial Data (question List)', () => {
  let mockStore = {};
  const mockDispatch = jest.fn( v => mockStore = { ...mockStore, ...v }); 
  return handlInitialData()(mockDispatch)
    .then(() => expect(mockStore).toHaveProperty('type', 'RECEIVE_QUESTIONS'));
});