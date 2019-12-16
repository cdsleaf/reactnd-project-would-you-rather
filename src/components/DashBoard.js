import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import QuestionsCard from './QuestionCard';
import QuestionSummary from './QuestionSummary';
import styled from 'styled-components';
import { device } from '../deviceBreakpoints';

const DashBoardMain = styled.div`
  width: 100%;
  margin: 1em auto;
  border-top: var(--border-style);
  border-bottom: var(--border-style);

  @media ${device.tablet} {
    width: 50%;
    border: var(--border-style);
  }
`;

const DashBoardHeader = styled.div`
  display: flex;
  border-bottom: var(--border-style);
  font-weight: bold;

  div {
    flex: 1;
  }

  div:nth-child(1) {
    border-right: var(--border-style);
  }

  p {
    text-align: center;
    cursor: pointer;
  }

  p:hover {
    color: blue;
  }
`;

const DashBoardTab = styled.div`
  background-color: ${props =>
    props.selectedTab ? 'lightgrey' : 'transparent'};
`;

const Card = QuestionsCard(QuestionSummary, 'question-card');

function DashBoard() {
  const UNANSWERED = 'unAnsweredQuestions';
  const ANSWERED = 'answeredQuestions';
  const questions = useSelector(({ auth, users, questions }) => {
    const authedUser = users[auth.authedUser];
    const questionsArray = Object.values(questions).sort(
      (a, b) => b.timestamp - a.timestamp
    );
    return {
      unAnsweredQuestions: questionsArray.filter(
        v => authedUser.answers[v.id] === undefined
      ),
      answeredQuestions: questionsArray.filter(
        v => authedUser.answers[v.id] !== undefined
      ),
    };
  });
  const [selectedTab, setSelectedTab] = useState('unAnsweredQuestions');
  const handleClick = event => {
    setSelectedTab(event.target.id);
  };

  return (
    <DashBoardMain>
      <DashBoardHeader>
        <DashBoardTab selectedTab={selectedTab === UNANSWERED}>
          <p id={UNANSWERED} onClick={handleClick}>
            Unanswered Questions
          </p>
        </DashBoardTab>
        <DashBoardTab selectedTab={selectedTab === ANSWERED}>
          <p id={ANSWERED} onClick={handleClick}>
            Answered Questions
          </p>
        </DashBoardTab>
      </DashBoardHeader>
      <div>
        {questions[selectedTab] &&
          questions[selectedTab].map(question => (
            <Card key={question.id} questionId={question.id} />
          ))}
      </div>
    </DashBoardMain>
  );
}

export default DashBoard;
