import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionsCard extends Component {
  render() {
    const headerTitle = 'Tester Asks';
    return (
      <div className='question-card'>
        <div className='question-card-header'>
          <p>headerTitle</p>
        </div>
        <div className='question-card-body'>
          <div className='card-avatar'>

          </div>
        </div>
      </div>
    )
  }
}

export default connect()(QuestionsCard);