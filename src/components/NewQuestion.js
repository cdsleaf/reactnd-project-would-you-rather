import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addNewQuestionAnswerAtAll } from '../actions/shared';
import styled from 'styled-components';
import { device } from '../deviceBreakpoints';

const NewQuestionMain = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  width: 100%;
  border-top: var(--border-style);
  border-bottom: var(--border-style);

  @media ${device.tablet} {
    width: 50%;
    border: var(--border-style);
  }
`;

const NewQuestionHeader = styled.div`
  border-bottom: 0.1rem solid #0abab5;

  p {
    text-align: center;
  }
`;

const NewQuestionBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;

  p {
    margin-top: 0;
  }

  hr {
    height: 0.1rem;
    width: 100%;
    margin: 0;
    border: none;
    border-top: 0.1rem solid grey;
    text-align: center;
    overflow: visible;
  }

  hr:after {
    position: relative;
    padding: 0 1em;
    top: -0.8em;
    content: 'OR';
    background-color: white;
  }

  input {
    height: 2.5rem;
    margin: 1rem 0.1rem;
    border: var(--border-style);
    padding: 0.5rem;
  }

  button {
    width: 100%;
    background: white;
    border: 0.1rem solid #0abab5;
    color: #0abab5;
    padding: 0.2rem;
    cursor: pointer;
  }
`;

function NewQuestion() {
  const author = useSelector(({ auth }) => auth.authedUser);
  const dispatch = useDispatch();
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');
  const [toHome, setToHome] = useState(false);

  const handleClick = event => {
    event.preventDefault();

    if (optionOneText === '' || optionTwoText === '') {
      alert('please write down to both option textbox');
      return;
    }

    dispatch(
      addNewQuestionAnswerAtAll(optionOneText, optionTwoText, author)
    ).then(() => setToHome(true));
  };

  if (toHome) {
    return <Redirect to="/" />;
  }

  return (
    <NewQuestionMain>
      <NewQuestionHeader>
        <p>Create New Question</p>
      </NewQuestionHeader>
      <NewQuestionBody>
        <p>Complete the question:</p>
        <p>Would you rather ...</p>
        <input
          type="text"
          name="optionOneText"
          value={optionOneText}
          onChange={({ target }) => setOptionOneText(target.value)}
          placeholder="Enter Option One Test Herer"
        />
        <hr />
        <input
          type="text"
          name="optionTwoText"
          value={optionTwoText}
          onChange={({ target }) => setOptionTwoText(target.value)}
          placeholder="Enter Option Two Test Herer"
        />
        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </NewQuestionBody>
    </NewQuestionMain>
  );
}
export default NewQuestion;
