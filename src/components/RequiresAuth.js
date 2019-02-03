import React from 'react';  
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router'

const AuthRoute = props => {
  const { 
    path, 
    isAuthenticated, 
    redirectUrl,
    component: Component,
    exact,
  } = props;

  return (
    <Route exact={exact} path={path} render={(props) => (
      isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: redirectUrl,
            state: { from: props.location }
          }} />
    )} />
  )
}

const mapStateToProps = ({ auth }, props) => {
  return {
    ...props,
    isAuthenticated: auth.isAuthenticated,
    redirectUrl: '/login',
  };
};

export default connect(mapStateToProps)(AuthRoute);