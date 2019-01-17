import React, { Component } from 'react';
import { connect } from 'react-redux';

class AskQuestion extends Component {

  constructor(props){
    super(props);

    this.state = {
      selectedOption: 'optionOne'
    }
  }

  handleOptionChange(event){
    
  }

  render() {
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
            onChange={(e) => {}} />
          {optionOneText}
        </label>
        <label>
          <input type='radio' 
            name='questionOptions' 
            value='optionTwo'
            checked={this.state.selectedOption === 'optionTwo'} />
          {optionTwoText}
        </label>
        <button type='button'>
          Submit
        </button>
      </div>
    )
  }
}

function mapStateToProps({ questions }, props){
  return {
    question: questions[props.questionId],
  }
}

export default connect(mapStateToProps)(AskQuestion);