import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import { Login } from './Login';

describe('Login Component', () => {
  let wrapper = null;
  let mockStore = configureStore([]);

  const initialState = { users: {id: 'testUser1', name: 'testUserNm'} };
  const store = mockStore(initialState);
  const context = { store };

  it('renders without crashing', () => {
    wrapper = shallow(<Login />,{ context });
  });

  it('check the onChange event in selecting user', () => {
    const mockedEvent = {
      target: {
        value: 'testUserId'
      }
    };
    console.log("!!!!", wrapper);
    wrapper.find('select').simulate('change', mockedEvent);
    expect(wrapper.state('value')).toEqual('testUserId');
  })
});



