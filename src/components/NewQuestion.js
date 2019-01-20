import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { addNewQuestionAnswerAtAll } from '../actions/shared';

class NewQuestion extends Component {

  constructor(props){
    super(props);

    this.state = {
      optionOneText: '',
      optionTwoText: '',
      toHome: false,
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const keyName = event.target.name;
    const value = event.target.value;
    this.setState({
      [keyName]: value
    })
  }

  handleClick(event){
    event.preventDefault();
    
    if(this.state.optionOneText === '' || this.state.optionTwoText === '' ){
      alert('please write down to both option textbox')
      return;
    }

    this.props.dispatch(addNewQuestionAnswerAtAll(
      this.state.optionOneText,
      this.state.optionTwoText,
      this.props.author,
    )).then(() => {
      this.setState({
        toHome: true,
      })
    })
  }

  render() {

    if(this.state.toHome){
      return <Redirect to='/' />
    }

    return (
      <div className='new-question'>
        <div className='new-question-header'>
          <p>Create New Question</p>
        </div>
        <div className='new-question-body'>
          <p>Complete the question:</p>
          <p>Would you rather ...</p>
          <input type='text' name='optionOneText'
            value={this.state.optionOneText} 
            onChange={this.handleChange} 
            placeholder='Enter Option One Test Herer' />
          <hr />
          <input type='text' name='optionTwoText'
            value={this.state.optionTwoText} 
            onChange={this.handleChange} 
            placeholder='Enter Option Two Test Herer' />
          <button type='button' onClick={this.handleClick}>
            Submit
          </button>
        </div>  
      </div>
    )
  }
}

function mapStateToProps({ auth }){
  return {
    author: auth.authedUser,
  }
}

export default connect(mapStateToProps)(NewQuestion);