import React from 'react';
import { shallow } from 'enzyme';
import UserInfo from './UserInfo';

it('renders without crashing', () => {
  shallow(<UserInfo />);
});
