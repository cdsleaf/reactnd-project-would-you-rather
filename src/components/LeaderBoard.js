import React, { Component } from 'react';
import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';

class LeaderBoard extends Component {
  render() {
    const { userList } = this.props;
    return (
      <div className='leader-board'>
        {userList.map(user => (
          <ScoreCard key={user.id} user={user}/>
        ))
        }
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
  }
}

export default connect(mapStateToProps)(LeaderBoard);