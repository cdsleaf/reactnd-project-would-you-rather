import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionsCard from './QuestionCard';
import QuestionSummary from './QuestionSummary';

const UNANSWERED = 'unanswered';
const ANSWERED = 'answered';
const Card = QuestionsCard(QuestionSummary);

export class DashBoard extends Component {

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    console.log(event.target.id);
  }

  componentDidMount(){
  }

  render() { 
    const { questions } = this.props;
    return (
      <div className='dashboard'>
        <div className='dashboard-header'>
          <div>
            <p id={UNANSWERED} onClick={this.handleClick}>Unanswered Questions</p>
          </div>
          <div className='dashboard-header-right'>
            <p id={ANSWERED} onClick={this.handleClick}>Answered Questions</p>
          </div>
        </div>
        <div className='question-list'>
          {questions.map(question => (
            <Card key={question.id} questionId={question.id} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, questions }){
  return {
    questions: Object.values(questions),
  }
}

export default connect(mapStateToProps)(DashBoard)