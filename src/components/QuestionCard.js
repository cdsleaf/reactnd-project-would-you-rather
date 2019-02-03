import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NoMatch } from './ErrorPages';

export default function (ComposedComponent, questionCardClass = 'question-card-for-asking'){
  class QuestionsCard extends Component {

    render() {
      const { user, questionId, InvalidQuestionId } = this.props;
      const headerTitle = user.name+' asks:';
      const avatarURL = user.avatarURL;
      
      return (
        <div className={questionCardClass}>
        {InvalidQuestionId ? (
            <NoMatch />
          ) : (
            <Fragment>
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
            </Fragment>
          )}
        </div>
      )
    }
  }

  function mapStateToProps({ users, questions }, props){
    const questionId = props.questionId || props.match.params.questionId;
    const question = questions[questionId];
    return {
      user: question !== undefined ? users[question.author] : {},
      questionId,
      InvalidQuestionId: Object.entries(questions).length > 0 && question === undefined  ,
    }
  }

  return connect(mapStateToProps)(QuestionsCard);
}