import React from 'react';
import { shallow } from 'enzyme';
import DashBoard from './DashBoard';

it('renders without crashing', () => {
  shallow(<DashBoard />);
});
