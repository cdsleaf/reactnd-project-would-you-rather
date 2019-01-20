import React from 'react';
import { shallow } from 'enzyme';
import NewQuestion from './NewQuestion';

it('renders without crashing', () => {
  shallow(<NewQuestion />);
});
