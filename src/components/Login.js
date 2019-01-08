import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialLoginData } from '../actions/shared';

class Login extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialLoginData());
  }

  render() {
    return (
      <div>
        Login TEST
      </div>
    );
  }
}

export default connect()(Login)