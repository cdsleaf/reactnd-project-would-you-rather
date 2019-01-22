import React, { Component } from 'react';
import { connect } from 'react-redux';

class ScoreCard extends Component {
  render() {
    return (
      <div >
        ScoreCard {this.props.user.name} {this.props.user.totalScore}
      </div>
    )
  }
}

export default connect()(ScoreCard);