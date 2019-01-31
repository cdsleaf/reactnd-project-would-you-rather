import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent, questionCardClass = 'question-card'){
  class QuestionsCard extends Component {

    render() {
      const { user, questionId } = this.props;
      const headerTitle = user.name+' asks:';
      const avatarURL = user.avatarURL;
      
      return (
        <div className={questionCardClass}>
          <div className='question-card-header'>
            <p>{headerTitle}</p>
          </div>
          <div className='question-card-body'>
            <div className='card-avatar'>
              <img src={process.env.PUBLIC_URL + avatarURL} alt="userAvatar" />
            </div>
            <div className='card-content'>
              <p>Would you rather</p>
              <ComposedComponent questionId={questionId}/>
            </div>
          </div>
        </div>
      )
    }
  }

  function mapStateToProps({ users, questions }, props){
    const questionId = props.questionId || props.match.params.questionId;
    const question = questions[questionId];
    return {
      user: users[question.author],
      questionId,
    }
  }

  return connect(mapStateToProps)(QuestionsCard);
}