import React from 'react';
import { shallow } from 'enzyme';
import ScoreCard from './ScoreCard';

it('renders without crashing', () => {
  shallow(<ScoreCard />);
});