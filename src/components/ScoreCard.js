import React, { Component } from 'react';
import { connect } from 'react-redux';

class ScoreCard extends Component {
  render() {
    const { 
      name, 
      avatarURL,
      scoreFromAnswered,
      scoreFromCreated, 
      totalScore 
    } = this.props.user;
    return (
      <div className='score-card' >
        <div className='card-avatar'>
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