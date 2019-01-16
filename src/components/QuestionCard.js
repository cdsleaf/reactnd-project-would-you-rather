import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent){
  class QuestionsCard extends Component {

    constructor(props){
      super(props);
      this.state={}
    }

    render() {
      const { user, questionId } = this.props;
      const headerTitle = user.name+' asks:';
      const avatarURL = user.avatarURL;
      
      return (
        <div className='question-card'>
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

  function mapStateToProps({ users }, props){
    return {
      user: users[props.userId],
      props,
    }
  }

  return connect(mapStateToProps)(QuestionsCard);
}