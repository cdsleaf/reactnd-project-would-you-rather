import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';

class LeaderBoard extends Component {
  render() {
    const { userList, medalColors } = this.props;
    return (
      <div className='leader-board'>
        {userList.map((user, index) => (
          <ScoreCard 
            key={user.id} 
            user={user} 
            medal={medalColors[index] === undefined 
              ? '' 
              : medalColors[index]}/>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ users }){
  const userList = Object.values(users).reduce((a, v) => {
    const user = {
      ...v,
      scoreFromAnswered: Object.keys(v.answers).length,
      scoreFromCreated: v.questions.length,
      totalScore:  Object.keys(v.answers).length + v.questions.length,
    }
    return [ ...a, user ]
  }, []).sort((a,b) => b.totalScore-a.totalScore)
  return {
    userList,
    medalColors: ['goldMedalColor', 'silverMedalColor', 'bronzeMedalColor'],
  }
}

export default connect(mapStateToProps)(LeaderBoard);