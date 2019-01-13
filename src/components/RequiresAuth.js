import React, { Component } from 'react';  
import { connect } from 'react-redux';
import { Redirect } from 'react-router'  

export default function (ComposedComponent) {  
  class Authenticate extends Component {

    render() {
      const { isAuthenticated, redirectUrl } = this.props;
      return (
        <div>
          { isAuthenticated ? <ComposedComponent {...this.props} /> : <Redirect to={redirectUrl} /> }
        </div>
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