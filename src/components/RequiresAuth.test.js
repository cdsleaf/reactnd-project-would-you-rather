import React from 'react';
import { shallow } from 'enzyme';
import RequiresAuth from './RequiresAuth';

it('renders without crashing', () => {
  shallow(<RequiresAuth />);
});
