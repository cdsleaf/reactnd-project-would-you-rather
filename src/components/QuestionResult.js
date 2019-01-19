import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionOptionResult from './QuestionOptionResult';

class QuestionResult extends Component {

  render() {
    return (
      <div className='question-result'>
        <QuestionOptionResult option={'optionOne'} questionId={this.props.questionId}/>
        <QuestionOptionResult option={'optionTwo'} questionId={this.props.questionId}/>
      </div>
    )
  }
}

export default connect()(QuestionResult);