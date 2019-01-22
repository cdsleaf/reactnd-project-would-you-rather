import React from 'react';
import { shallow } from 'enzyme';
import LeaderBoard from './LeaderBoard';

it('renders without crashing', () => {
  shallow(<LeaderBoard />);
});