import React, { Component } from 'react';  
import { connect } from 'react-redux';
import { Redirect } from 'react-router'  

export default function (ComposedComponent, redirectUrl) {  
  class Authenticate extends Component {

    state = {
      toLogin: false,
    }

    render() {
      const { isAuthenticated, redirectUrl, match } = this.props;
      if(!isAuthenticated) return <Redirect to={redirectUrl} />
      return (
        <ComposedComponent match={match} />
      );
    }
  }

  const mapStateToProps = ({ auth }) => {
    return {
      isAuthenticated: auth.isAuthenticated,
      redirectUrl: '/login',
    };
  };

  return connect(mapStateToProps)(Authenticate);
}