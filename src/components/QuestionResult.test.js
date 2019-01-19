import React from 'react';
import { shallow } from 'enzyme';
import QuestionResult from './QuestionResult';

it('renders without crashing', () => {
  shallow(<QuestionResult />);
});
