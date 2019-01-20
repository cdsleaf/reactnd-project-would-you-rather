import { 
  handleInitialLoginData, 
  handlInitialData, 
  saveQuestionAnswerAtAll,
  addNewQuestionAnswerAtAll,
} from './shared';

it('Should create an action to set the initial login Data (user List)', () => {
  let returnObject = {};
  const mockDispatch = jest.fn( v => returnObject= { ...returnObject, [v.type]: v}); 
  return handleInitialLoginData()(mockDispatch)
    .then(() => {
      expect(returnObject).toHaveProperty('RECEIVE_USERS');
      expect(returnObject).toHaveProperty('loading-bar/HIDE');
    });
});

it('Should create an action to set the initial Data (question List)', () => {
  let returnObject = {};
  const mockDispatch = jest.fn( v => returnObject= { ...returnObject, [v.type]: v}); 
  return handlInitialData()(mockDispatch)
    .then(() => {
      expect(returnObject).toHaveProperty('RECEIVE_QUESTIONS');
      expect(returnObject).toHaveProperty('loading-bar/HIDE');
    });
});

it('should create an action to save question answer', () => {
  let returnObject = {};
  const mockDispatch = jest.fn( v => returnObject= { ...returnObject, [v.type]: v}); 
  return saveQuestionAnswerAtAll('sarahedo','vthrdm985a262al8qx3do','optionOne')(mockDispatch)
    .then(() => {
      expect(returnObject).toHaveProperty('SAVE_QUESTION_ANSWER_AT_USERS');
      expect(returnObject).toHaveProperty('SAVE_QUESTION_ANSWER_AT_QUESTION');
      expect(returnObject).toHaveProperty('loading-bar/HIDE');
    });
})

it('should create an action to add new question', () => {
  let returnObject = {};
  const mockDispatch = jest.fn( v => returnObject= { ...returnObject, [v.type]: v}); 
  const optionOneText = 'new optionOne'; 
  const optionTwoText = 'new optionTwo'; 
  const author = 'sarahedo';

  return addNewQuestionAnswerAtAll(optionOneText, optionTwoText, author)(mockDispatch)
    .then(() => {
    expect(returnObject).toHaveProperty('ADD_NEW_QUESTION_AT_USERS');
    expect(returnObject).toHaveProperty('ADD_NEW_QUESTION_AT_QUESTION');
    expect(returnObject).toHaveProperty('loading-bar/HIDE');
  });
});