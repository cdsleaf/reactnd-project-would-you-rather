import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionsCard from './QuestionCard';

export class DashBoard extends Component {

  constructor(props){
    super(props);
    this.UNANSWERED = 'unanswered';
    this.ANSWERED = 'answered';

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    console.log(event.target.id);
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className='dashboard'>
        <div className='dashboard-header'>
          <div>
            <p id={this.UNANSWERED} onClick={this.handleClick}>Unanswered Questions</p>
          </div>
          <div className='dashboard-header-right'>
            <p id={this.ANSWERED} onClick={this.handleClick}>Answered Questions</p>
          </div>
        </div>
        <div className='question-list'>
          <QuestionsCard />

        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }){
  return {

  }
}


export default connect(mapStateToProps)(DashBoard)