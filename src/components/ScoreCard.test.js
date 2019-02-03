import React from 'react';
import { shallow } from 'enzyme';
import ScoreCard from './ScoreCard';

it('renders without crashing', () => {
  const user = {
  }
  const medal = {

  }
  shallow(<ScoreCard user={user} medal={medal}/>);
});