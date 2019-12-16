import React from 'react';
import { useSelector } from 'react-redux';
import ScoreCard from './ScoreCard';
import styled from 'styled-components';
import { device } from '../deviceBreakpoints';

const LeaderBoardMain = styled.div`
  margin: 1rem auto;
  padding: 1rem 1rem 0 1rem;

  @media ${device.tablet} {
    width: 50%;
    margin: 1rem auto;
    border: 0.1rem solid grey;
  }
`;

function LeaderBoard() {
  const userList = useSelector(({ users }) => {
    return Object.values(users)
      .reduce((a, v) => {
        const user = {
          ...v,
          scoreFromAnswered: Object.keys(v.answers).length,
          scoreFromCreated: v.questions.length,
          totalScore: Object.keys(v.answers).length + v.questions.length,
        };
        return [...a, user];
      }, [])
      .sort((a, b) => b.totalScore - a.totalScore);
  });
  const medalColors = [
    'goldMedalColor',
    'silverMedalColor',
    'bronzeMedalColor',
  ];

  return (
    <LeaderBoardMain>
      {userList.map((user, index) => (
        <ScoreCard
          key={user.id}
          user={user}
          medal={medalColors[index] === undefined ? '' : medalColors[index]}
        />
      ))}
    </LeaderBoardMain>
  );
}

export default LeaderBoard;
