import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class QuestionSummary extends Component {

  render() {
    const { id, optionOne } = this.props.question;
    const questionText = optionOne.text;
    const linkPath = 'questions';
    return (
      <div className='question-summary'>
        <p>...{questionText}...</p>
        <Link to={`/${linkPath}/${id}` } >
          <button type='button'>
            View Poll
          </button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps({ questions }, props){
  return {
    question: questions[props.questionId],
  }
}

export default connect(mapStateToProps)(QuestionSummary);