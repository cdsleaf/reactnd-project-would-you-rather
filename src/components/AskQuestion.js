import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { saveQuestionAnswerAtAll } from '../actions/shared';

class AskQuestion extends Component {

  constructor(props){
    super(props);

    this.state = {
      selectedOption: 'optionOne',
      toHome: false,
    }

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleOptionChange(event){
    this.setState({
      selectedOption: event.target.value,
    }) 
  }

  handleSubmitClick(event){
    event.preventDefault();
    const { authedUser, question } = this.props;
    this.props.dispatch(saveQuestionAnswerAtAll(
      authedUser, 
      question.id, 
      this.state.selectedOption));

    this.setState({
      toHome: true,
    })
  }

  render() {

    if(this.state.toHome){
      return <Redirect to='/' />
    }

    const { optionOne, optionTwo } = this.props.question;
    const optionOneText = optionOne.text;
    const optionTwoText = optionTwo.text;
    return (
      <div className='question-options'>
        <label>
          <input type='radio' 
            name='questionOptions' 
            value='optionOne'
            checked={this.state.selectedOption === 'optionOne'}
            onChange={this.handleOptionChange} />
          {optionOneText}
        </label>
        <label>
          <input type='radio' 
            name='questionOptions' 
            value='optionTwo'
            checked={this.state.selectedOption === 'optionTwo'}
            onChange={this.handleOptionChange} />
          {optionTwoText}
        </label>
        <button type='button' onClick={this.handleSubmitClick}>
          Submit
        </button>
      </div>
    )
  }
}

function mapStateToProps({ auth, questions }, props){
  return {
    authedUser: auth.authedUser,
    question: questions[props.questionId],
  }
}

export default connect(mapStateToProps)(AskQuestion);