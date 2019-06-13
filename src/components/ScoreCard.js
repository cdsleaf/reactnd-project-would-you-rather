import React from 'react';
import { GiTrophyCup } from 'react-icons/gi';

const ScoreCard = (props) => {
  const { user, medal } = props;
  const { 
    name, 
    avatarURL,
    scoreFromAnswered,
    scoreFromCreated, 
    totalScore 
  } = user;

  return (
    <div className='score-card' >
      <div className='card-avatar'>
        <div className={'medal-icon ' + medal}>
          {medal !== '' &&
            <GiTrophyCup />
          }
        </div>   
        <img src={process.env.PUBLIC_URL + avatarURL} alt="userAvatar" />
      </div>
      <div className='score-detail'>
        <div>
          <span>{name}</span>
        </div>
        
        <span>Answered Questions <em>{scoreFromAnswered}</em></span>
        <hr />
        <span>Created Questions <em>{scoreFromCreated}</em></span>
      </div>
      <div className='total-score'>
        <div className='total-score-title'>
          <span>Score</span>
        </div>
        <div className='total-score-point'>
          <span>{totalScore}</span>
        </div>
      </div>
    </div>
  )
}

export default ScoreCard;