import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionOptionResult extends Component {
  render() {
    const { option, totalVotes, selectedOption } = this.props
    const percentage = {
      width: `${(option.votes.length / totalVotes) *100}%`,
    }
    return (
      <div className='question-option-result'>
        <p>Would you rather {option.text}?</p>
        <span className='vote-bar'>
          <span style={percentage} />
        </span>
        <p>{`${option.votes.length} out of ${totalVotes} votes ${selectedOption ? '(your answer)' : ''}`}</p>
      </div>
    )
  }
}

function mapStateToProps({ auth, users, questions }, props){

  const { answers } = users[auth.authedUser];
  const { optionOne, optionTwo } = questions[props.questionId];
  return {
    option: questions[props.questionId][props.option],
    totalVotes: optionOne.votes.length + optionTwo.votes.length,
    selectedOption: props.option === answers[props.questionId]
  }
}

export default connect(mapStateToProps)(QuestionOptionResult);
