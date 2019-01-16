import React, { Component } from 'react';
import { connect } from 'react-redux';

class AskQuestion extends Component {
  render() {
    return (
      <div>
        AskQuestion!!!
      </div>
    )
  }
}

export default connect()(AskQuestion);