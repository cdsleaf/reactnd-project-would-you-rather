import React from 'react';
import { shallow } from 'enzyme';
import AskQuestion from './AskQuestion';

it('renders without crashing', () => {
  shallow(<AskQuestion />);
});
