import React from 'react';
import { shallow } from 'enzyme';
import DashBoard, { mapStateToProps } from './DashBoard';

it('renders without crashing', () => {
  shallow(<DashBoard />);
});

it('should return questions as separated two arrays in descending order', () => {

  const inputValue = {
    auth: {
      authedUser: 'user1'
    }, 
    users: {
      user1: {
        id:'user1',
        answers: {
          question1: { id: 'question1' },
          question3: { id: 'question3' }
        }
      }
    }, 
    questions: {
      question1: {
        id: 'question1',
        timestamp: 1547798612880
      },
      question2: {
        id: 'question2',
        timestamp: 1547798629371
      },
      question3: {
        id: 'question3',
        timestamp: 1547798632806
      }
    }
  }

  const expectedResult = {
    unAnsweredQuestions: [
      {
        id: 'question2',
        timestamp: 1547798629371
      }
    ],
    answeredQuestions: [
      {
        id: 'question3',
        timestamp: 1547798632806
      },
      {
        id: 'question1',
        timestamp: 1547798612880
      }
    ]
  }
  expect(mapStateToProps(inputValue)).toEqual(expectedResult);
})