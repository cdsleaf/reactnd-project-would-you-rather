import React from 'react';
import { shallow } from 'enzyme';
import QuestionSummary from './QuestionSummary';

it('renders without crashing', () => {
  shallow(<QuestionSummary />);
});
