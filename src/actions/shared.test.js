import { handleInitialLoginData } from './shared';

it('Should create an action to set the initial login Data (user List)', () => {
  let mockStore = {};
  const mockDispatch = jest.fn( v => mockStore = { ...mockStore, ...v }); 
  return handleInitialLoginData()(mockDispatch)
    .then(() => expect(mockStore).toHaveProperty('type', 'RECEIVE_USERS'));
});