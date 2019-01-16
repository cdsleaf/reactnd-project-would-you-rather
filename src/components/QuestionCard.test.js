import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import QuestionCard from './QuestionCard';

it('renders without crashing', () => {
  shallow(<QuestionCard />);
});

