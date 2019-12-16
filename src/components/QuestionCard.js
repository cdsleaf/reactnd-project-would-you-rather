import React from 'react';
import { useSelector } from 'react-redux';
import { NoMatch } from './ErrorPages';
import styled from 'styled-components';

const QuestionCardDeader = styled.div`
  border-bottom: var(--border-style);
  background-color: powderblue;
  p {
    margin: 0.5rem;
    font-weight: bold;
  }
`;

const QuestionCardBody = styled.div`
  display: flex;
`;

const CardAvatar = styled.div`
  img {
    width: 6rem;
    height: 6rem;
    padding: 0 1rem;
  }
`;

const CardContent = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  border-left: var(--border-style);
  padding: 0 0.5rem;

  p {
    margin: 0;
    font-size: 1.5rem;
  }
`;
export default function(
  ComposedComponent,
  questionCardClass = 'question-card-for-asking'
) {
  function QuestionsCard(props) {
    const { user, questionId, InvalidQuestionId } = useSelector(
      ({ users, questions }) => {
        const questionId = props.questionId || props.match.params.questionId;
        const question = questions[questionId];
        return {
          user: question !== undefined ? users[question.author] : {},
          questionId,
          InvalidQuestionId:
            Object.entries(questions).length > 0 && question === undefined,
        };
      }
    );

    const headerTitle = user.name + ' asks:';
    const avatarURL = user.avatarURL;

    return (
      <div className={questionCardClass}>
        {InvalidQuestionId ? (
          <NoMatch />
        ) : (
          <>
            <QuestionCardDeader>
              <p>{headerTitle}</p>
            </QuestionCardDeader>
            <QuestionCardBody>
              <CardAvatar>
                <img
                  src={process.env.PUBLIC_URL + avatarURL}
                  alt="userAvatar"
                />
              </CardAvatar>
              <CardContent>
                <p>Would you rather</p>
                <ComposedComponent questionId={questionId} />
              </CardContent>
            </QuestionCardBody>
          </>
        )}
      </div>
    );
  }

  return QuestionsCard;
}
