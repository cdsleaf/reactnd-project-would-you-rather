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
        <div>
          <p>{name}</p> 
          <p>Answered Questions {scoreFromAnswered}</p>
          <hr />
          <p>Created Questions {scoreFromCreated}</p>

        </div>
        <div>
          ScoreCard {totalScore}
        </div>
      </div>
    )
  }
}

export default connect()(ScoreCard);