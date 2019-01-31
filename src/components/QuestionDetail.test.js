import React from 'react';
import { shallow } from 'enzyme';
import QuestionDetail from './QuestionDetail';

it('renders without crashing', () => {
  shallow(<QuestionDetail />);
});
