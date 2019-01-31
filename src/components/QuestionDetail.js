import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { saveQuestionAnswerAtAll } from '../actions/shared';
import QuestionOptionResult from './QuestionOptionResult';

class QuestionDetail extends Component {

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

    const { question, answered } = this.props;
    const { optionOne, optionTwo } = question;
    const optionOneText = optionOne.text;
    const optionTwoText = optionTwo.text;
    return (
      <Fragment>
        {answered ? (
          <div className='question-result'>
            <QuestionOptionResult option={'optionOne'} questionId={this.props.questionId}/>
            <QuestionOptionResult option={'optionTwo'} questionId={this.props.questionId}/>
          </div>
        ) : (
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
        )}
      </Fragment>
    )
  }
}

function mapStateToProps({ auth, users, questions }, props){
  return {
    question: questions[props.questionId],
    answered: users[auth.authedUser].answers.hasOwnProperty(props.questionId),
  }
}

export default connect(mapStateToProps)(QuestionDetail);