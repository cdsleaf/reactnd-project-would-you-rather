import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class QuestionSummary extends Component {

  render() {
    const { id, optionOne } = this.props.question;
    const questionText = optionOne.text;
    const linkPath = this.props.answered ? 'result' : 'ask';
    return (
      <div className='question-summary'>
        <p>...{questionText}...</p>
        <Link to={`/${linkPath}/${id}`}>
          <button type='button'>
            View Poll
          </button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps({ auth, users, questions }, props){
  const { answers } = users[auth.authedUser];
  return {
    question: questions[props.questionId],
    answered: answers[props.questionId] !== undefined,
  }
}

export default connect(mapStateToProps)(QuestionSummary);