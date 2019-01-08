import { handleInitialLoginData } from './shared';

it('Should create an action to set the initial login Data (user List)', () => {
  let mockStore = {};
  const mockDispatch = jest.fn( v => mockStore ); 
  return handleInitialLoginData()(mockDispatch)
    .then(data => expect(data).toHaveProperty('type', 'RECEIVE_USERS'));
});