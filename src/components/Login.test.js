import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'
import Login from './Login';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

describe('Login Component', () => {
  let mockStore = configureStore([]);
  const initialState = { users: {id: 'testUser1', name: 'testUserNm'} };
  const store = mockStore(initialState);

  const setup = () => {
    return shallow(<Provider store={store}><Login /></Provider>); 
  }

  it('renders without crashing', () => {
    setup();
  });
});



