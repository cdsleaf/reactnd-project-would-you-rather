import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GiTrophyCup } from 'react-icons/gi';

class ScoreCard extends Component {
  render() {
    const { user, medal } = this.props;
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
          <p>{name}</p> 
          <p>Answered Questions <em>{scoreFromAnswered}</em></p>
          <hr />
          <p>Created Questions <em>{scoreFromCreated}</em></p>
        </div>
        <div className='total-score'>
          <div className='total-score-title'>
            <p>Score</p>
          </div>
          <div className='total-score-point'>
            <p>{totalScore}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(ScoreCard);