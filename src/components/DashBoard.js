import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionsCard from './QuestionCard';
import QuestionSummary from './QuestionSummary';

const Card = QuestionsCard(QuestionSummary, 'question-card');

export class DashBoard extends Component {

  constructor(props){
    super(props);

    this.state = {
      selectedTab: 'unAnsweredQuestions',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    this.setState({
      selectedTab: event.target.id,
    })  
  }

  componentDidMount(){
    
  }
  
  render() { 
    const UNANSWERED = 'unAnsweredQuestions';
    const ANSWERED = 'answeredQuestions';
    const questions = this.props[this.state.selectedTab];
    return (
      <div className='dashboard'>
        <div className='dashboard-header'>
          <div className={this.state.selectedTab === UNANSWERED 
            ? 'dashboard-header-selected' 
            : ''}>
            <p id={UNANSWERED} onClick={this.handleClick}>Unanswered Questions</p>
          </div>
          <div className={this.state.selectedTab === ANSWERED 
            ? 'dashboard-header-right dashboard-header-selected' 
            : 'dashboard-header-right'}>
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

export function mapStateToProps({ auth, users, questions }){
  
  const authedUser = users[auth.authedUser];
  const questionsArray = Object.values(questions).sort((a, b) => b.timestamp - a.timestamp);
  return {
    unAnsweredQuestions: questionsArray.filter(v => authedUser.answers[v.id] === undefined),
    answeredQuestions: questionsArray.filter(v => authedUser.answers[v.id] !== undefined)
  }
}

export default connect(mapStateToProps)(DashBoard)