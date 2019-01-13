import React, { Component } from 'react';
import { connect } from 'react-redux';

export class DashBoard extends Component {

  componentDidMount(){
  }

  render() {
    return (
      <div>
          DashBoard
      </div>
    );
  }
}


export default connect()(DashBoard)